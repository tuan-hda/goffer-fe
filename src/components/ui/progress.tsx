import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from 'src/lib/utils';

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<
        typeof ProgressPrimitive.Root & {
            color?: 'primary' | 'default';
        }
    >
>(({ className, value, color = 'default', ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'relative h-2 w-full overflow-hidden rounded-full',
            color === 'primary' ? 'bg-primary/20' : 'bg-black/20',
            className,
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn(
                'h-full w-full flex-1 bg-primary transition-all',
                color === 'primary' ? 'bg-primary' : 'bg-black',
            )}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
