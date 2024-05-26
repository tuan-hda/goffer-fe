import { withCn } from '@udecode/cn';

import { Toolbar } from './toolbar';

export const FixedToolbar = withCn(
    Toolbar,
    'supports-backdrop-blur:bg-background/60 sticky left-0 top-[57px] z-[9] w-full justify-between overflow-x-auto rounded-t-xl border-b border-b-border backdrop-blur',
);
