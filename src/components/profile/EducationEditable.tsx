import { useEffect, useState } from 'react';
import { Editable } from '../common';
import EducationForm from './EducationForm';
import { Education, User } from '@/types/user.type';
import { newEducationSchema } from '@/validation/education.validation';
import * as Yup from 'yup';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

type EditEducation = {
    isCreating?: false;
    children?: React.ReactNode;
    index: number;
};

type CreateEducation = {
    isCreating: true;
};

type EducationEditableProps = {
    educations: Education[];
    updateProfile: (data: Partial<User>) => Promise<void>;
} & (EditEducation | CreateEducation);

function isEditEducation(arg: EditEducation | CreateEducation): arg is EditEducation {
    return !arg.isCreating;
}

const defaultEducation: Education = {
    school: '',
};

const EducationEditable = (props: EducationEditableProps) => {
    const { educations, isCreating } = props;

    const [edit, setEdit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [education, setEducation] = useState<Education>(defaultEducation);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (isEditEducation(props)) {
            setEducation(educations[props.index]);
        }
    }, [props]);

    const validate = async () => {
        try {
            await newEducationSchema.validate(education, { abortEarly: false });
            setError('');
            return true;
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setError(err.errors[0]);
            }
            return false;
        }
    };

    const saveEducation = async () => {
        try {
            let newEducations = [...educations];
            if (isEditEducation(props)) {
                newEducations[props.index] = education;
            } else {
                newEducations = [...educations, education];
            }
            newEducations = newEducations.map(({ _id, ...rest }) => ({
                ...rest,
            }));
            await props.updateProfile({ education: newEducations });
            setEducation(defaultEducation);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Failed to save education');
                return;
            } else {
                toast.error('Failed to save education');
            }
        }
    };

    const handleSave = async () => {
        setLoading(true);
        const isValid = await validate();
        if (!isValid) {
            setLoading(false);
            return;
        }
        await saveEducation();
        setEdit(false);
        setLoading(false);
    };

    const handleRemove = async () => {
        try {
            setLoading(true);
            if (!isEditEducation(props)) {
                return;
            }
            const newEducations = educations
                .filter((_, index) => index !== props.index)
                .map(({ _id, ...rest }) => rest);
            await props.updateProfile({ education: newEducations });
            setEdit(false);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Failed to remove education');
                return;
            }
            toast.error('Failed to remove education');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Editable
            edit={edit}
            setEdit={setEdit}
            onSave={handleSave}
            onRemove={handleRemove}
            mode={isCreating ? 'new' : 'active'}
            type="custom"
            deletable={!isCreating}
            name="education"
            saving={loading}
            closeOnSave={false}
            placeholder="Enter your education..."
            custom={<EducationForm error={error} data={education} setData={setEducation} />}
        >
            {isEditEducation(props) && props.children}
        </Editable>
    );
};

export default EducationEditable;
