import CustomInput from 'components/shared/customInput';
import React, { useState, useTransition } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

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
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.asPath);
  console.log(router.query);

  const { accounts } = useSelector((state) => state?.account);
  const onSubmit = (data: any) => {
    const user = accounts.find(
      (account) => account?.email === data?.email && account?.password === data?.password
    );

    if (user) {
      router.push('/');
    } else {
      setError('User is not registered yet!!');
      setTimeout(() => {
        setError('');
      }, 3000);
    }
  };
  return (
    <div
      className="flex items-center justify-center signup-container"
      style={{ minHeight: '100vh' }}
    >
      <div className="card px-10 py-10 w-96">
        <h1 className="text-3xl text-center">{t('signin.login')}</h1>
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
                type="email"
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
          <p className="mt-3 text-sm text-slate-500 text-center flex justify-end">
            <Link href="/forget-password">
              <u>{' ' + t('signin.forgetPassword')}</u>
            </Link>
          </p>
          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          <button type="submit" className="mt-10 w-full rounded p-4 bg-sky-500/100">
            {t('signin.login')}
          </button>
          <p className="mt-3 text-sm text-slate-500 flex justify-between">
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
