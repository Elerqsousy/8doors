import CustomInput from 'components/shared/customInput';
import React, { useTransition } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
type Props = {
  // Add custom props here
};
function SignIn() {
  const { t } = useTranslation('common');
  const router = useRouter();
  console.log(router);
  return (
    <div className="container flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="card px-10 py-10 w-96">
        <h1 className="text-3xl">{t('signin.signin')}</h1>
        <p className="text-slate-500">{t('signin.singContinue')}</p>
        <form>
          <CustomInput label="Email" />
          <CustomInput label="Password" />
          <p className="mt-3 text-sm text-slate-500 text-center">
            <b>Forget Password </b>
            <Link href="/forget-password">
              <u>Reset password</u>
            </Link>
          </p>
          <button className="mt-10 w-full rounded p-4 bg-sky-500/100">SignIn</button>
          <p className="mt-3 text-sm text-slate-500 text-center">
            <b>{"Don't have account "}</b>
            <Link href="/signup">
              <u>create an Account</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
