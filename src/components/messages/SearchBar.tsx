import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { TbChartBubble, TbSearch } from 'react-icons/tb';
import { Input } from '../ui/input';
import { SearchBarProps, useTranslationContext } from 'stream-chat-react';

const SearchBar = (props: SearchBarProps) => {
    const { inputRef, disabled, onSearch, placeholder, query, searchBarRef } = props;
    const { t } = useTranslationContext('SearchInput');

    return (
        <>
            <Breadcrumbs className="mt-[5px] px-4">
                <BreadcrumbItem>
                    <TbChartBubble className="text-lg" /> Messages
                </BreadcrumbItem>
            </Breadcrumbs>
            <div
                data-testid="search-bar"
                ref={searchBarRef}
                onClick={() => searchBarRef.current?.focus()}
                className="str-chat__channel-search-bar mt-5 flex h-14 items-center gap-0 border-y border-y-[#EEEEF0] bg-[#FAFAFA] px-4 text-text"
            >
                <TbSearch className="text-base" />
                <Input
                    ref={inputRef}
                    data-testid="search-input"
                    className="str-chat__channel-search-input flex-1 border-0 px-1 shadow-none outline-0 focus-visible:ring-0"
                    disabled={disabled}
                    onChange={onSearch}
                    placeholder={placeholder ?? t('Search contacts')}
                    type="text"
                    value={query}
                />
            </div>
        </>
    );
};

export default SearchBar;
