type ColorListProps = {
    colors: string[];
};

const ColorList = ({ colors }: ColorListProps) => {
    return (
        <div className="grid grid-cols-8 gap-1">
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="aspect-square rounded-full outline outline-[0.5px] outline-gray-300"
                    style={{ backgroundColor: color }}
                />
            ))}
        </div>
    );
};

export default ColorList;
