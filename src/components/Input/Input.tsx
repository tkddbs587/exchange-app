import type { UseFormRegisterReturn } from 'react-hook-form';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  classNames?: string;
  register?: UseFormRegisterReturn;
}

export function Input({
  placeholder,
  classNames,
  register,
  ...props
}: InputProps) {
  return (
    <input
      placeholder={placeholder}
      className={clsx(
        'h-[75px] w-full rounded-[12px] border border-[#374553] px-6 text-[20px] font-semibold leading-[27px] text-[#646F7C]',
        classNames,
      )}
      {...register}
      {...props}
    />
  );
}
