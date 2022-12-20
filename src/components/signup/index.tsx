import CustomInput from 'components/shared/customInput';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function SignUp() {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <div className="container flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="card px-10 py-10 w-96">
        <h1 className="text-3xl">{t('signup.signup')}</h1>
        <p className="text-slate-500">{t('signup.signUpContinue')}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label={t('signup.userName')}
                error={errors?.userName ? t('signup.userNameIsRequired') : ''}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name="userName"
          />
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
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <CustomInput
                label={t('signup.confirmPassword')}
                type="password"
                value={value}
                onChange={onChange}
                error={errors?.confirmPassword ? t('signup.pleaseConfirm') : ''}
                onBlur={onBlur}
              />
            )}
            name="confirmPassword"
          />
          <p className="mt-3 text-sm text-slate-500 text-center">
            <b>{t('signup.alreadyHaveAccount') + ' '}</b>
            <Link href="/login">
              <u>{t('signin.signin')}</u>
            </Link>
          </p>
          <button className="mt-10 w-full p-4 bg-sky-500/100">{t('signup.signup')}</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
