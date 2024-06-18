import { TbArrowLeft, TbExternalLink, TbLoader } from 'react-icons/tb';
import PortfolioPreview from './PortfolioPreview';
import SetupBar from './SetupBar';
import { Button } from '../ui/button';
import usePortfolioStore from '@/stores/portfolioStore';
import { Switch } from '../ui/switch';
import catchAsync from '@/utils/catchAsync';
import { useState } from 'react';
import { updateSelfService } from '@/services/users.service';
import { shallow } from 'zustand/shallow';
import useSelfProfileQuery from '@/hooks/useSelfProfileQuery';
import { toast } from 'sonner';
import _ from 'lodash';
import { sentenceCase } from '@/utils/string';

const PortfolioSetup = () => {
    const [portfolio, setPortfolio] = usePortfolioStore((state) => [state.portfolio, state.setPortfolio], shallow);
    const [loading, setLoading] = useState(false);
    const { data: self, refetch } = useSelfProfileQuery();

    const save = () =>
        catchAsync(
            async () => {
                setLoading(true);
                await updateSelfService({
                    portfolio,
                });
                await refetch();
                toast.success('Portfolio updated');
            },
            () => {
                setLoading(false);
            },
        );

    const handleCheckedChange = (checked: boolean) =>
        catchAsync(
            async () => {
                setLoading(true);
                await updateSelfService({
                    portfolio: {
                        ...portfolio,
                        status: checked ? 'published' : 'draft',
                    },
                });
                await refetch();
                toast.success('Portfolio updated');
            },
            () => {
                setLoading(false);
            },
        );

    const resetTemplate = () => {
        setPortfolio((prev) => ({
            ...prev,
            template: undefined,
        }));
    };

    return (
        <div>
            <div className="flex items-center">
                <button className="-ml-4 px-4" onClick={resetTemplate}>
                    <TbArrowLeft className="text-3xl" />
                </button>
                <div className="mr-auto">
                    <h1 className="text-3xl">Setup portfolio</h1>
                </div>

                {self?.portfolio?.status && (
                    <div className="mr-8 flex items-center gap-2">
                        <p className="font-medium">{sentenceCase(self.portfolio.status)}</p>
                        <Switch
                            disabled={loading}
                            checked={self.portfolio.status === 'published'}
                            onCheckedChange={handleCheckedChange}
                        />
                    </div>
                )}
                {self?.portfolio?.status === 'published' && (
                    <Button variant="outline" asChild>
                        <a
                            href={`/portfolio/${self.portfolio.portfolioDomain}`}
                            target="_blank"
                            className="flex items-center gap-2" rel="noreferrer"
                        >
                            Open your portfolio
                            <TbExternalLink className="text-lg" />
                        </a>
                    </Button>
                )}
            </div>
            <p className="mb-4 mt-3 text-gray-500">
                Please be noted that the below video is just a preview and the actual portfolio will be different.
            </p>
            <div className="grid h-full w-full grid-cols-12 gap-10">
                <div className="col-span-8 flex h-full items-start">
                    <PortfolioPreview />
                </div>
                <div className="col-span-4">
                    <SetupBar />
                    <Button
                        disabled={loading || _.isEqual(self?.portfolio, portfolio)}
                        onClick={save}
                        size="lg"
                        variant="black"
                        className="mt-4 w-full"
                    >
                        {loading && <TbLoader className="mr-2 animate-spin text-xl" />}
                        Save portfolio
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSetup;
