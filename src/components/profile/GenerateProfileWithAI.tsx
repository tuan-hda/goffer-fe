import { TbSparkles } from 'react-icons/tb';
import GenAIGenerateProfileProvider from '../genai/GenAIGenerateProfileProvider';
import { Button } from '../ui/button';
import { GenerateProfileResult } from '../genai/data';
import { useState } from 'react';

import moment from 'moment';
import catchAsync from '@/utils/catchAsync';
import { User } from '@/types/user.type';
import { updateSelfService } from '@/services/users.service';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import classNames from 'classnames';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const GenerateProfileWithAI = () => {
    const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);
    const { data: self } = useSelfProfileQuery();

    const { refetch } = useSelfProfileQuery();

    const handleResponse = (response: GenerateProfileResult) =>
        catchAsync(
            async () => {
                setLoading(true);
                if (response && response !== 'string') {
                    const filteredProfile: Partial<User> = {};
                    for (const key in response as any) {
                        const value = (response as any)[key];
                        if (Array.isArray(value) && value.length === 0) {
                            continue;
                        }
                        if (typeof value === 'string' && value === '') {
                            continue;
                        }
                        filteredProfile[key as keyof User] = value;
                    }

                    await updateSelfService(filteredProfile);
                    await refetch();
                    setOpened(false);
                }
            },
            () => {
                setLoading(false);
            },
        );

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div>
                            <div className={classNames((!self || !self.isPro) && 'pointer-events-none')}>
                                <GenAIGenerateProfileProvider onResponse={handleResponse}>
                                    <Button
                                        disabled={!self || !self.isPro}
                                        variant="black"
                                        className="ml-auto"
                                        size="icon"
                                    >
                                        <TbSparkles className="text-lg" />
                                    </Button>
                                </GenAIGenerateProfileProvider>
                            </div>
                        </div>
                    </TooltipTrigger>
                    {(!self || !self.isPro) && (
                        <TooltipContent>
                            <p>Subscribe to Pro plan to unlock</p>
                        </TooltipContent>
                    )}
                </Tooltip>
            </TooltipProvider>
        </>
    );
};

export default GenerateProfileWithAI;
