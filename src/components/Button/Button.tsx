interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`h-[77px] w-full rounded-[12px] bg-[#1B2334] text-[22px] font-bold leading-[29px] text-white ${props.disabled && 'opacity-50'}`}
      {...props}
    >
      {children}
    </button>
  );
}
