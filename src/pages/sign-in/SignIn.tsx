import { SignInForm } from './_components/SignInForm/SignInForm';
import { SignInHeader } from './_components/SignInHeader/SignInHeader';

export function SignIn() {
  return (
    <div className="mx-auto flex h-screen w-[560px] flex-col justify-center gap-12">
      <SignInHeader />
      <SignInForm />
    </div>
  );
}
