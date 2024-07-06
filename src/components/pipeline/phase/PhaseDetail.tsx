import useApplicationById from '@/hooks/useApplicationById';
import Progress from './Progress';
import { Link } from 'react-router-dom';
import { TbPencilMinus } from 'react-icons/tb';
import moment from 'moment';
import useGetOrganization from '@/hooks/useGetOganization';
import { Button } from '@/components/ui/button';

interface Props {
    applicationId: string;
    onSelected?: (_: string | number) => void;
}
const PhaseDetail = ({ applicationId, onSelected }: Props) => {
    const { data } = useApplicationById(applicationId);
    const { data: org } = useGetOrganization(data?.job.org as unknown as string);
    return (
        <div className="my-8">
            <Progress phase={data?.phase} />
            <div className="mt-10 flex min-h-[400px] w-full flex-col items-center justify-center gap-y-5 overflow-hidden rounded-xl border-none p-10 px-20 shadow-medium">
                {data?.phase === 'applied' && (
                    <p className="text-center font-serif-2 text-3xl font-medium text-black">
                        Thank you for your application! We've received your submission and will carefully review your
                        qualifications. Please be patient as we assess all candidates
                    </p>
                )}
                {data?.phase === 'shortlisted' && (
                    <>
                        <p className="text-center font-serif-2 text-3xl font-medium text-black">
                            Congratulations! Your application has been shortlisted. We're impressed with your profile
                            and would like to invite you to the next step. Please check your email for further
                            instructions
                        </p>
                        {data.job.assessments.length > 0 && (
                            <span className="flex items-center gap-2 text-nowrap text-center font-serif-2 text-xl text-text">
                                <TbPencilMinus size={24} /> Please complete the
                                <Button
                                    onClick={() => onSelected && onSelected('assessments')}
                                    variant="outline"
                                    className="font-medium uppercase hover:text-primary"
                                    size="sm"
                                >
                                    assessment test
                                </Button>
                                to help us better understand your skills and experience
                            </span>
                        )}
                    </>
                )}
                {data?.phase === 'assessed' && (
                    <p className="text-center font-serif-2 text-3xl font-medium text-black">
                        Thank you for completing the assessment. We're currently reviewing your results along with other
                        shortlisted candidates. You will receive an update soon
                    </p>
                )}
                {data?.phase === 'interviewed' && (
                    <p className="text-center font-serif-2 text-3xl font-medium text-black">
                        Thank you for participating in the interview. We appreciate your time and insights. We will be
                        in touch shortly with the next steps in the process
                    </p>
                )}
                {data?.phase === 'offered' && (
                    <>
                        <p className="text-center font-serif-2 text-3xl font-medium text-black">
                            Congratulations! We're pleased to offer you the position of {data.job.title}
                        </p>
                        <p className="text-center font-serif-2 text-2xl font-medium text-black">
                            Please review the offer details and confirm your acceptance by{' '}
                            {moment(data.updatedAt).add(7, 'days').format('LL')}
                        </p>
                    </>
                )}
                {data?.phase === 'rejected' && (
                    <p className="text-center font-serif-2 text-3xl font-medium text-black">
                        Thank you for your interest in {org?.name}. After careful consideration, we've decided to move
                        forward with other candidates whose qualifications more closely align with our current needs. We
                        wish you the best in your job search
                    </p>
                )}
                {data?.phase === 'hired' && (
                    <p className="text-center font-serif-2 text-3xl font-medium text-black">
                        Welcome aboard! We're thrilled to have you join our team. Please check your email for onboarding
                        details and next steps
                    </p>
                )}
            </div>
        </div>
    );
};

export default PhaseDetail;
