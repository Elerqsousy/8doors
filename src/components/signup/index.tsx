import CustomInput from 'components/shared/customInput';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { generate } from 'randomized-string';
import { useDispatch } from 'react-redux';
import { addAccount } from 'redux/reducers/accountReducer';
import { useRouter } from 'next/router';
function SignUp() {
  const { t } = useTranslation('common');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const onSubmit = (data: any) => {
    if (data?.confirmPassword !== data?.password) {
      setError('Password confirmation error');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }
    const user = {
      id: generate(10),
      username: data?.userName,
      password: data?.password,
      email: data?.email,
    };
    dispatch(addAccount(user));
    router.push('/login');
  };
  return (
    <div
      className="flex items-center justify-center signup-container"
      style={{ minHeight: '100vh' }}
    >
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
          {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}
          <button className="mt-10 w-full p-4 bg-sky-500/100">{t('signup.signup')}</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
