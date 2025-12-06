import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/libs/utils.lib';

const tooltipVariants = cva('py-1.5 px-3 rounded-lg w-fit text-lg relative', {
  variants: {
    color: {
      blue: 'bg-light-sky-blue text-white',
      green: 'bg-nephritis/05 text-trabuddy-alternative',
      turquoise: 'bg-white text-turquoise',
    },
  },
  defaultVariants: {
    color: 'turquoise',
  },
});

const tooltipArrowVariants = cva('absolute', {
  variants: {
    color: {
      blue: 'text-light-sky-blue',
      green: 'text-nephritis/05',
      turquoise: 'text-turquoise',
    },
    arrowPosition: {
      bottomLeft: 'bottom-0 translate-y-full left-2.5',
      bottomCenter: 'bottom-0 translate-y-full left-1/2 -translate-x-1/2',
    },
  },
  defaultVariants: {
    color: 'turquoise',
    arrowPosition: 'bottomLeft',
  },
});

type TooltipProps = React.ComponentProps<'div'> &
  VariantProps<typeof tooltipVariants> &
  VariantProps<typeof tooltipArrowVariants>;

export function Tooltip({ children, className, color, arrowPosition, ...props }: TooltipProps) {
  return (
    <div className={cn(tooltipVariants({ color, className }))} {...props}>
      {children}
      <div className={cn(tooltipArrowVariants({ color, arrowPosition }))}>
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.12991 9.75C5.93746 10.0833 5.45634 10.0833 5.26389 9.75L0.0677346 0.749999C-0.124715 0.416665 0.115848 -1.09987e-06 0.500748 -1.06622e-06L10.8931 -1.57697e-07C11.278 -1.24048e-07 11.5185 0.416667 11.3261 0.75L6.12991 9.75Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
