import classNames from 'classnames';
import { Item } from './SideBar';
import { Link } from 'react-router-dom';

type SidebarItemProps = {
    item: Item;
    collapsed: boolean;
    matches:
        | {
              pathname: string;
          }[]
        | null;
};

const SidebarItem = ({ item, collapsed, matches }: SidebarItemProps) => {
    return item.type === 'button' ? (
        <button className="flex w-full items-center justify-start gap-[18px] rounded-lg py-2 pl-[9px] pr-2 text-primary transition hover:bg-beige/70">
            {item.element.startContent}
            <p
                className={classNames(
                    'pointer-events-auto absolute left-[60px] overflow-hidden whitespace-nowrap opacity-100 transition',
                    collapsed ? 'pointer-events-none !opacity-0' : 'pointer-events-auto opacity-100',
                )}
            >
                {item.element.content}
            </p>
        </button>
    ) : (
        <Link
            to={item.element.path}
            className={classNames(
                'flex w-full items-center justify-start gap-[18px] rounded-lg py-2 pl-[9px] pr-2 text-text transition hover:bg-beige/70',
                matches && matches.length > 0 && item.element.path.includes(matches[0].pathname) ? 'bg-beige' : '',
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
        </Link>
    );
};

export default SidebarItem;
