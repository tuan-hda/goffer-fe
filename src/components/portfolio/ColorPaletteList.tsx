import ColorPalette from './ColorPalette';
import { PALETTE } from '@/data/portfolio';
import _ from 'lodash';
import usePortfolioStore from '@/stores/portfolioStore';
import { shallow } from 'zustand/shallow';

const ColorPaletteList = () => {
    const [portfolio, setPortfolio] = usePortfolioStore((state) => [state.portfolio, state.setPortfolio], shallow);

    return (
        <div className="space-y-4">
            {Object.keys(PALETTE).map((key, index) => (
                <ColorPalette
                    key={index}
                    palette={PALETTE[key]}
                    name={key}
                    selected={_.isEqual(portfolio?.palette, PALETTE[key])}
                    onClick={() =>
                        setPortfolio((prev) => ({
                            ...prev,
                            palette: PALETTE[key],
                        }))
                    }
                />
            ))}
        </div>
    );
};

export default ColorPaletteList;
