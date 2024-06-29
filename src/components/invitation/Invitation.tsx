import useGetInvitation from '@/hooks/useGetInvitation';
import { Chip, Image } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { acceptInvitation, rejectInvitation } from '@/services/membership.service';
import { useState } from 'react';
import { TbLoaderQuarter } from 'react-icons/tb';
import { toast } from 'sonner';

const Invitation = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: res, isLoading } = useGetInvitation(id || '');

    const [loading, setLoading] = useState(false);

    if (isLoading || !res?.data)
        return (
            <div className="m-auto h-full w-full">
                <TbLoaderQuarter size={28} className="animate-spin" />
            </div>
        );

    const { data } = res;

    const onAccept = async () => {
        setLoading(true);
        acceptInvitation(data.invitationToken)
            .then(() => {
                navigate(`/app/organization/${data.org.domain}`);
            })
            .catch((error) => toast(error.response.data.message))
            .finally(() => setLoading(false));
    };
    const onReject = async () => {
        setLoading(true);
        rejectInvitation(data.invitationToken)
            .then(() => {
                navigate(-1);
            })
            .catch((error) => toast(error.response.data.message))
            .finally(() => setLoading(false));
    };

    return (
        <div className="text-sm">
            <div className="bg-image fixed bottom-0 left-0 right-0 top-0" />

            <div className="relative z-[1] mx-auto flex min-h-screen max-w-screen-md flex-col gap-9 px-7 pb-7 pt-10">
                {/* Title */}
                <div className="flex-1">
                    <div className="mb-5">
                        <Image src={data.org.logo} alt="logo" className="z-[1] h-16 w-16 rounded-full" />
                        <p className="mt-3 text-sm font-medium">{data.org.name}</p>
                        <p className="mt-1 text-3xl font-medium text-text">
                            Official Invitation to Join Our Team at {data.org.name}
                        </p>
                    </div>
                    <div className="space-y-8 text-2xl font-normal text-text">
                        <p className="font-serif">Dear {data.user.name},</p>
                        <p className="font-serif">
                            We are pleased to extend a formal invitation for you to join our esteemed team at{' '}
                            {data.org.name}. Your impressive background and expertise align perfectly with our company's
                            goals and values.
                        </p>
                        <p className="font-serif">
                            At {data.org.name}, we foster a collaborative and innovative work environment where you will
                            have the opportunity to make a significant impact and contribute to groundbreaking projects.
                            We believe your unique skills and perspectives will be invaluable to our continued success.
                        </p>
                        <p className="font-serif">
                            We eagerly anticipate your positive response and look forward to welcoming you aboard.
                        </p>
                        {loading ? (
                            <TbLoaderQuarter size={28} className="animate-spin" />
                        ) : data.status === 'sent' ? (
                            <div className="flex flex-row gap-4">
                                <Button
                                    size="lg"
                                    className="gap-x-2"
                                    onClick={onReject}
                                    variant="outline"
                                    color="primary"
                                >
                                    Reject
                                </Button>
                                <Button
                                    size="lg"
                                    className="gap-x-2"
                                    onClick={onAccept}
                                    variant="black"
                                    color="primary"
                                >
                                    Accept
                                </Button>
                            </div>
                        ) : data.status === 'accepted' ? (
                            <Chip size="lg" color="success" className="text-xs" radius="sm" variant="flat">
                                You are already a member of this organization
                            </Chip>
                        ) : (
                            data.status === 'rejected' && (
                                <Chip size="lg" color="danger" className="text-xs" radius="sm" variant="flat">
                                    Invalid or expired invitation
                                </Chip>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invitation;
