import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import Upload from '../common/Upload';
import ColorPaletteList from './ColorPaletteList';

const SetupBar = () => {
    const [logoType, setLogoType] = useState<'text' | 'image'>('text');

    return (
        <Card className="rounded-2xl">
            <CardHeader>
                <CardTitle className="text-base">Setting up your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>
                    <span>Portfolio's domain</span>
                    <Input placeholder="Custom domain" className="mt-2" />
                </Label>
                <div className="h-6" />
                <Label>
                    <span>Your logo</span>
                    <RadioGroup
                        value={logoType}
                        onValueChange={(value) => setLogoType(value as 'text' | 'image')}
                        defaultValue="text"
                        className="mb-3 mt-2"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="text" id="r1" />
                            <Label htmlFor="r1">Text</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="image" id="r2" />
                            <Label htmlFor="r2">Image</Label>
                        </div>
                    </RadioGroup>
                    {logoType === 'text' ? <Input placeholder="Your logo here..." /> : <Upload />}
                </Label>

                <div className="h-6" />
                <Label>
                    <span>Select color palette</span>
                    <div className="h-2" />
                    <ColorPaletteList />
                </Label>
            </CardContent>
            <CardFooter>
                <Button variant="black" className="w-full">
                    Save
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SetupBar;
