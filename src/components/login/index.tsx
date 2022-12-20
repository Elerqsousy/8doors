import CustomInput from 'components/shared/customInput';
import React, { useTransition } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useForm, Controller } from 'react-hook-form';

type Props = {
  // Add custom props here
};
function SignIn() {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div
      className="flex items-center justify-center signup-container"
      style={{ minHeight: '100vh' }}
    >
      <div className="card px-10 py-10 w-96">
        <h1 className="text-3xl">{t('signin.signin')}</h1>
        <p className="text-slate-500">{t('signin.singContinue')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label={t('signup.email')}
                error={errors?.email ? t('signin.emailIsRequired') : ''}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label={t('signin.password')}
                type="password"
                value={value}
                onChange={onChange}
                error={errors?.password ? t('signin.passwordIsRequired') : ''}
                onBlur={onBlur}
              />
            )}
            name="password"
          />
          <p className="mt-3 text-sm text-slate-500 text-center">
            <b>{t('signin.forgetPassword')}</b>
            <Link href="/forget-password">
              <u>{' ' + t('signin.resetPassword')}</u>
            </Link>
          </p>
          <button type="submit" className="mt-10 w-full rounded p-4 bg-sky-500/100">
            {t('signin.signIn')}
          </button>
          <p className="mt-3 text-sm text-slate-500 text-center">
            <b>{t('signin.donotHaveAccount') + ' '}</b>
            <Link href="/signup">
              <u>{t('signin.createAccount')}</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
