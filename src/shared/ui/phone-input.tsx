import * as React from 'react';
import InputMask from 'react-input-mask';
import { cn } from '@shared/lib/utils';

export interface PhoneInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <InputMask
        mask="+7 (999) 999-99-99"
        maskChar={null}
        alwaysShowMask={false}
        {...props}
      >
        {(inputProps: any) => (
          <input
            {...inputProps}
            ref={ref}
            type="tel"
            className={cn(
              'flex h-11 w-full rounded-md border border-input bg-background px-4 py-2.5 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              className
            )}
          />
        )}
      </InputMask>
    );
  }
);
PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };

