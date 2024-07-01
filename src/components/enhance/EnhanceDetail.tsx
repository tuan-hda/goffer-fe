import { UploadPopover } from '@/components/common';
import { AnalyzePanel, ViewPanel } from '@/components/enhance';
import ProDefaultFallback from '@/components/proPlan/ProDefaultFallback';
import ProtectedProWrapper from '@/components/proPlan/ProtectedProWrapper';
import { Button } from '@/components/ui/button';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import useUpdateProfile from '@/hooks/useUpdateProfile';
import { Image } from '@nextui-org/react';
import { useEffect } from 'react';
import EnhanceResult from './EnhanceResult';

const EnhanceDetail = () => {
    const { data: self, refetch } = useSelfProfileQuery();
    const { updateProfile } = useUpdateProfile();

    useEffect(() => {
        refetch();
    }, []);

    return (
        <ProtectedProWrapper fallback={<ProDefaultFallback />}>
            {self?.resume ? (
                <div className="-mx-6 flex flex-1 border-t">
                    <EnhanceResult />
                </div>
            ) : (
                <div className="relative flex h-[240px] items-center justify-between overflow-hidden rounded-3xl px-20 py-4 font-serif text-3xl shadow-small">
                    <div>
                        <p className="relative z-[11] font-medium">Upload your resume to get analyzed</p>
                        <UploadPopover
                            onAttach={async (data) => {
                                await updateProfile({
                                    resume: data,
                                });
                                refetch();
                            }}
                            trigger={
                                <Button variant="black" className="mt-4 font-sans">
                                    Upload your resume
                                </Button>
                            }
                        />
                    </div>
                    <div className="absolute right-10 top-6 h-full">
                        <Image
                            classNames={{
                                wrapper: 'h-[180px] w-[180px]',
                            }}
                            src="/assets/sparkle.png"
                        />
                    </div>
                </div>
            )}
        </ProtectedProWrapper>
    );
};

export default EnhanceDetail;
