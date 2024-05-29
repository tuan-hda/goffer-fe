import { TbCheck } from 'react-icons/tb';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import ColorList from './ColorList';
import classNames from 'classnames';

type ColorPalletteProps = {
    className?: string;
    selected?: boolean;
};

const ColorPalette = ({ className, selected }: ColorPalletteProps) => {
    return (
        <button className="block w-full rounded-xl text-left">
            <Card className={classNames('relative outline-gray-400 transition hover:outline', className)}>
                <CardHeader>
                    <CardTitle>Darker</CardTitle>
                </CardHeader>
                <CardContent>
                    <ColorList />
                </CardContent>
                {selected && (
                    <div className="absolute right-1 top-1 -translate-y-1/2 translate-x-1/2 rounded-full bg-black p-1">
                        <TbCheck className="text-base text-white" />
                    </div>
                )}
            </Card>
        </button>
    );
};

export default ColorPalette;
