import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Upload from '../common/Upload';
import ColorPaletteList from './ColorPaletteList';
import usePortfolioStore from '@/stores/portfolioStore';
import { TEMPLATE } from '@/data/portfolio';
import { shallow } from 'zustand/shallow';
import { PortfolioConfiguration } from '@/types/portfolio.type';

const SetupBar = () => {
    const [portfolio, setPortfolio] = usePortfolioStore((state) => [state.portfolio, state.setPortfolio], shallow);

    const handleChange = (key: keyof PortfolioConfiguration) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setPortfolio((prev) => ({
            ...prev,
            [key]: e.target.value,
        }));
    };

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle className="text-base">{portfolio?.template && TEMPLATE[portfolio.template].name}</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>
                    <span>Brand name</span>
                </Label>
                <div className="mt-2 flex">
                    <Input
                        onChange={handleChange('brandName')}
                        value={portfolio?.brandName}
                        placeholder="Your name or brand"
                        className="mr-2 flex-1"
                    />
                </div>
                <div className="h-6" />
                <Label>
                    <span>Portfolio's domain</span>
                </Label>
                <div className="mt-2 flex">
                    <Input
                        onChange={handleChange('portfolioDomain')}
                        value={portfolio?.portfolioDomain}
                        placeholder="Custom domain"
                        className="mr-2 flex-1"
                    />
                    <Button variant="outline" className="pointer-events-none">
                        .goffer.online
                    </Button>
                </div>
                <div className="h-6" />
                <Label>
                    <span className="block">Your logo</span>
                    <Upload
                        directUpload
                        showingImage
                        accept="image/*"
                        fileUrl={portfolio?.logo}
                        onAttach={(url) =>
                            setPortfolio((prev) => ({
                                ...prev,
                                logo: url,
                            }))
                        }
                        className="mt-3 flex-1"
                    />
                </Label>

                <div className="h-6" />
                <Label>
                    <span>Select color palette</span>
                    <div className="h-2" />
                    <ColorPaletteList />
                </Label>
            </CardContent>
        </Card>
    );
};

export default SetupBar;
