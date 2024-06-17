import { TbLoader, TbSparkles } from 'react-icons/tb';
import GenAIGenerateProfileProvider from '../genai/GenAIGenerateProfileProvider';
import { Button } from '../ui/button';
import { GenerateProfileResult } from '../genai/data';
import { useState } from 'react';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
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
    const [profileResult, setProfileResult] = useState<GenerateProfileResult | null>(null);
    const { data: self } = useSelfProfileQuery();

    const { refetch } = useSelfProfileQuery();

    const handleResponse = (response: GenerateProfileResult) => {
        if (typeof response !== 'string') {
            setProfileResult(response);
            setOpened(true);
        }
    };

    const apply = () =>
        catchAsync(
            async () => {
                setLoading(true);
                if (profileResult && profileResult !== 'string') {
                    const filteredProfile: Partial<User> = {};
                    for (const key in profileResult as any) {
                        const value = (profileResult as any)[key];
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
            <AlertDialog open={opened} onOpenChange={setOpened}>
                <AlertDialogContent className="text-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                            Here's your new profile! <TbSparkles className="text-lg" />
                        </AlertDialogTitle>
                    </AlertDialogHeader>
                    {profileResult && typeof profileResult !== 'string' && (
                        <div>
                            <p>
                                <strong>One-liner:</strong> {profileResult.oneLiner}
                            </p>
                            <p>
                                <strong>Bio:</strong> {profileResult.bio}
                            </p>
                            <p>
                                <strong>Skills:</strong> {profileResult.skills.join(', ')}
                            </p>
                            <p>
                                <strong>Tools:</strong> {profileResult.tools.join(', ')}
                            </p>
                            <div>
                                <strong>Education:</strong>
                                {profileResult.education.map((edu, index) => (
                                    <div key={index}>
                                        <p>
                                            {edu.school}, {edu.degree} ({moment(edu.startDate)?.format('MM/YY')} -{' '}
                                            {moment(edu.endDate)?.format('MM/YY')})
                                        </p>
                                        {edu.major && <p>Major: {edu.major}</p>}
                                        {edu.description && <p>Description: {edu.description}</p>}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <strong>Experiences:</strong>
                                {profileResult.experiences.map((exp, index) => (
                                    <div key={index}>
                                        <p>
                                            {exp.title} at {exp.company} ({moment(exp.startDate).format('MM/YY')} -{' '}
                                            {moment(exp.endDate)?.format('MM/YY')})
                                        </p>
                                        {exp.description && <p>Description: {exp.description}</p>}
                                    </div>
                                ))}
                            </div>
                            <p>
                                <strong>Location:</strong> {profileResult.location}
                            </p>
                            <div>
                                <strong>Links:</strong>
                                {profileResult.links.map((link, index) => (
                                    <p key={index}>
                                        <a href={link.url}>
                                            {link.label} ({link.url})
                                        </a>
                                    </p>
                                ))}
                            </div>
                        </div>
                    )}
                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
                        <Button variant="black" onClick={apply} disabled={loading}>
                            {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                            Apply
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

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
