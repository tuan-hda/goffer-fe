import { Experience, User } from '@/types/user.type';
import { Editable } from '../common';
import ExperienceForm from './ExperienceForm';
import { useEffect, useState } from 'react';
import { newExperienceSchema } from '@/validation/experience.validation';
import * as Yup from 'yup';
import { isAxiosError } from 'axios';
import toast from 'react-hot-toast';

type EditExperience = {
    isCreating?: false;
    children?: React.ReactNode;
    index: number;
};

type CreateExperience = {
    isCreating: true;
};

type ExperienceEditableProps = {
    experiences: Experience[];
    updateProfile: (data: Partial<User>) => Promise<void>;
} & (EditExperience | CreateExperience);

function isEditExperience(arg: EditExperience | CreateExperience): arg is EditExperience {
    return !arg.isCreating;
}

const defaultExperience: Experience = {
    title: '',
    company: '',
    startDate: new Date(),
};

const ExperienceEditable = (props: ExperienceEditableProps) => {
    const { experiences, isCreating } = props;

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [experience, setExperience] = useState<Experience>(defaultExperience);

    useEffect(() => {
        if (isEditExperience(props)) {
            setExperience(experiences[props.index]);
        }
    }, [props]);

    const validate = async () => {
        try {
            await newExperienceSchema.validate(experience, { abortEarly: false });
            setError('');
            return true;
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                setError(err.errors[0]);
            }
            return false;
        }
    };

    const saveExperience = async () => {
        try {
            let newExperiences = [...experiences];
            if (isEditExperience(props)) {
                newExperiences[props.index] = experience;
            } else {
                newExperiences = [...experiences, experience];
            }
            newExperiences = newExperiences.map(({ _id, ...rest }) => ({
                ...rest,
            }));
            await props.updateProfile({ experiences: newExperiences });
            setExperience(defaultExperience);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Failed to save experience');
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
        await saveExperience();
        setEdit(false);
        setLoading(false);
    };

    const handleRemove = async () => {
        try {
            setLoading(true);
            if (!isEditExperience(props)) {
                return;
            }
            const newExperiences = experiences
                .filter((_, index) => index !== props.index)
                .map(({ _id, ...rest }) => rest);
            await props.updateProfile({ experiences: newExperiences });
            setEdit(false);
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Failed to remove experience');
                return;
            }
            toast.error('Failed to remove experience');
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
            deletable={!isCreating}
            type="custom"
            name="experience"
            saving={loading}
            closeOnSave={false}
            placeholder="Enter your experience..."
            custom={<ExperienceForm error={error} data={experience} setData={setExperience} />}
        >
            {isEditExperience(props) ? props.children : null}
        </Editable>
    );
};

export default ExperienceEditable;
