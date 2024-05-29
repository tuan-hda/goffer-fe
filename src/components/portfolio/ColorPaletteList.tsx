import { useState } from 'react';
import ColorPalette from './ColorPalette';

const ColorPaletteList = () => {
    const [selected, setSelected] = useState<number>(0);

    return (
        <>
            <ColorPalette selected={selected === 0} />
            <div className="h-4"></div>
            <ColorPalette />
        </>
    );
};

export default ColorPaletteList;
