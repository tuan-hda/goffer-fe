import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Item } from './items';

type SidebarItemProps = {
    item: Item;
    collapsed: boolean;
    match?: Item;
    onClick?: () => void;
};

const SidebarItem = ({ item, collapsed, match, onClick }: SidebarItemProps) => {
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
                'flex w-full items-center justify-start gap-[18px] rounded-xl py-2 pl-[9px] pr-2 text-text transition hover:bg-beige/70',
                match?.type === 'link' && match.element.path === item.element.path ? 'bg-beige/70' : '',
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
        </Link>
    );
};

export default SidebarItem;
