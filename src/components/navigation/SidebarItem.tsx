import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Item } from './items';

type SidebarItemProps = {
    item: Item;
    collapsed: boolean;
    match?: Item;
    onClick?: () => void;
    color?: string;
};

const SidebarItem = ({ item, collapsed, match, onClick, color }: SidebarItemProps) => {
    return item.type === 'button' ? (
        <button
            onClick={onClick}
            className={classNames(
                'flex w-full items-center justify-start gap-[18px] rounded-xl py-2 pl-[9px] pr-2 transition hover:bg-beige/70',
                item.element.isPrimary && 'text-primary',
            )}
        >
            {item.element.startContent}
            <p
                className={classNames(
                    'pointer-events-auto absolute left-[60px] overflow-hidden whitespace-nowrap opacity-100 transition',
                    collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                )}
            >
                {item.element.content}
            </p>
            {item.element.endContent}
        </button>
    ) : (
        <Link
            to={item.element.path}
            className={classNames(
                'relative flex w-full items-center justify-start gap-[18px] rounded-xl py-2 pl-[9px] pr-2 text-text transition hover:bg-beige/70',
                match?.type === 'link' && match.element.path === item.element.path ? 'bg-beige/70' : '',
            )}
            style={{ color }}
        >
            {item.element.startContent}
            <p
                className={classNames(
                    'pointer-events-auto absolute left-[46px] overflow-hidden whitespace-nowrap opacity-100 transition',
                    collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                )}
            >
                {item.element.content}
            </p>
            <div className={classNames('absolute', collapsed ? 'right-0' : 'right-2')}>{item.element.endContent}</div>
        </Link>
    );
};

export default SidebarItem;
