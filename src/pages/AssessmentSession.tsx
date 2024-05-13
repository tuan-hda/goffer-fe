import { SessionTracker } from '@/components/assessment';
import { Image } from '@nextui-org/react';

const AssessmentSession = () => {
    return (
        <div className="flex min-h-screen w-full">
            <div className="mx-auto flex w-full max-w-screen-2xl gap-20 p-10">
                <div className="flex-1">
                    <p className="mt-4 font-serif text-3xl font-bold">Assessment #1 - Computer science foundation</p>
                    <div className="mt-5 flex items-center gap-2">
                        <div className="flex h-fit w-fit items-center gap-4 overflow-hidden">
                            by
                            <Image
                                src={
                                    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png'
                                }
                                className="h-12 w-12 rounded-3xl"
                            />
                            <div>
                                <p className="font-semibold">Spotify</p>
                                <p>Entertainment</p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 mt-7 border-t-2 border-dashed border-gray-100" />
                </div>

                <SessionTracker />
            </div>
        </div>
    );
};

export default AssessmentSession;
