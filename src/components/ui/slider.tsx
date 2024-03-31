import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from 'src/lib/utils';

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<
        typeof SliderPrimitive.Root & {
            color?: 'primary' | 'default';
        }
    >
>(({ className, color = 'default', ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex w-full touch-none select-none items-center', className)}
        {...props}
    >
        <SliderPrimitive.Track
            className={cn(
                'relative h-1.5 w-full grow overflow-hidden rounded-full',
                color === 'primary' ? 'bg-primary/20' : 'bg-black/20',
            )}
        >
            <SliderPrimitive.Range className={cn('absolute h-full', color === 'primary' ? 'bg-primary' : 'bg-black')} />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className={cn(
                'block h-4 w-4 rounded-full border bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
                color === 'primary' ? 'border-primary/50' : 'border-black/50',
            )}
        />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
