import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ColorPallette = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Darker</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex">
                    <div className="h-8 w-8 rounded-full bg-gray-800" />
                    <div className="h-8 w-8 rounded-full bg-gray-700" />
                    <div className="h-8 w-8 rounded-full bg-gray-600" />
                    <div className="h-8 w-8 rounded-full bg-gray-500" />
                </div>
            </CardContent>
        </Card>
    );
};

export default ColorPallette;
