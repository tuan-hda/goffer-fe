import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<
        typeof ProgressPrimitive.Root & {
            color?: 'primary' | 'default' | 'white';
        }
    >
>(({ className, value, color = 'default', ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'relative h-2 w-full overflow-hidden rounded-full',
            {
                'bg-primary/20': color === 'primary',
                'bg-black/20': color === 'default',
                'bg-gray-500': color === 'white',
            },
            className,
        )}
        {...props}
    >
        <ProgressPrimitive.Indicator
            className={cn('h-full w-full flex-1 bg-primary transition-all', {
                'bg-primary': color === 'primary',
                'bg-black': color === 'default',
                'bg-white': color === 'white',
            })}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
