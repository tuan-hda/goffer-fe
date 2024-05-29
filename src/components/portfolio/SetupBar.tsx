import { Button } from '../ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import ColorPallette from './ColorPallette';

const SetupBar = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Setting up your portfolio</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>
                    <span>Portfolio's domain</span>
                    <Input placeholder="Custom domain" />
                </Label>
                <div className="h-6" />
                <Label>
                    <span>Your logo</span>
                </Label>
                <div className="h-6" />
                <Label>
                    <span>Select color pallette</span>
                    <ColorPallette />
                    <div className="h-4"></div>
                    <ColorPallette />
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
