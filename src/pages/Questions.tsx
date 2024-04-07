import { Button } from '@/components/ui/button';
import { OrgDetailLayout, OrgLayout } from '@/layouts';
import { Image } from '@nextui-org/react';

const Questions = () => {
    return (
        <OrgLayout>
            <OrgDetailLayout>
                <div className="flex-1 text-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-3xl">Questions</h1>
                            <p className="mt-2 text-sm text-text/70">Add question to evaluate candidates.</p>
                        </div>
                        <Button className="rounded-lg">Add a question</Button>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center p-20 text-sm">
                        <Image src="/flowerlike.png" width={240} height={240} />
                        <p>You have no question yet.</p>
                    </div>
                </div>
            </OrgDetailLayout>
        </OrgLayout>
    );
};

export default Questions;
