import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Item } from './items';

type SidebarItemProps = {
    item: Item;
    collapsed: boolean;
    match?: Item;
    isMatched?: boolean;
    onClick?: () => void;
    isAdmin?: boolean;
    isEndContent?: boolean;
    target?: string;
};

const SidebarItem = ({
    item,
    collapsed,
    match,
    onClick,
    isMatched,
    isAdmin = false,
    isEndContent = true,
    target,
}: SidebarItemProps) => {
    return item.type === 'button' ? (
        <button
            onClick={onClick}
            className={classNames(
                'flex w-full items-center justify-start gap-[18px] rounded-xl py-2 pl-[9px] pr-2 transition',
                item.element.isPrimary && 'text-primary',
                isAdmin ? 'hover:bg-white/20' : 'hover:bg-beige/70',
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
            {isEndContent && !collapsed && item.element.endContent}
        </button>
    ) : (
        <Link
            target={target}
            to={item.element.path}
            className={classNames(
                'relative flex w-full items-center justify-start gap-[18px] rounded-xl py-2 pl-[9px] pr-2 transition',
                {
                    'bg-beige/70':
                        isMatched || (match?.type === 'link' && match.element.path === item.element.path && !isAdmin),
                    'bg-white/10':
                        isMatched || (match?.type === 'link' && match.element.path === item.element.path && isAdmin),
                },
                isAdmin ? 'text-white' : 'text-text',
                isAdmin ? 'hover:bg-white/20' : 'hover:bg-beige/70',
            )}
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
            <div className={classNames('absolute', collapsed ? '-right-[3px]' : 'right-2')}>
                {isEndContent && item.element.endContent}
            </div>
        </Link>
    );
};

export default SidebarItem;
