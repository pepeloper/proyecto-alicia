import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
  className = '',
  disabled,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={
        `inline-flex items-center rounded-full border border-transparent bg-alicia-orange px-12 py-3 text-center text-base font-bold font-semibold tracking-wide text-white transition duration-150 ease-in-out hover:bg-alicia-orange focus:bg-alicia-orange focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-alicia-orange ${
          disabled ? 'opacity-25' : ''
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
