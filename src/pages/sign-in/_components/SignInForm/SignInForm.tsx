import { useForm } from 'react-hook-form';
import { useSignIn } from '../../../../apis/hooks/useSignIn';
import { Button } from '../../../../components/Button/Button';

export function SignInForm() {
  const { mutate: signIn } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
    },
  });

  return (
    <form
      onSubmit={handleSubmit(({ email }) => signIn(email))}
      className="flex flex-col gap-8 rounded-[20px] border border-[#D0D6DB] bg-[#F7F8F9] px-8 py-6"
    >
      <div className="flex flex-col gap-3">
        <span className="text-[20px] leading-[27px] text-[#646F7C]">
          이메일 주소를 입력해주세요.
        </span>
        <input
          placeholder="이메일"
          className="h-[75px] w-full rounded-[12px] border border-[#374553] px-6 text-[20px] font-semibold leading-[27px] text-[#646F7C]"
          aria-invalid={Boolean(errors.email)}
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
        />

        {errors.email && (
          <p className="text-[14px] leading-[18px] text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        로그인 하기
      </Button>
    </form>
  );
}
