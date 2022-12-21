import CustomInput from 'components/shared/customInput';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { generate } from 'randomized-string';
import { useDispatch } from 'react-redux';
import { addAccount } from 'redux/reducers/accountReducer';
import { useRouter } from 'next/router';
import Logo from '../../assets/logo.svg';

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
    <div className="self-center px-10 py-10 w-96">
      <div className="flex  align-center justify-center">
        <Logo style={{ height: 65, width: 65 }} />
      </div>
      <h1 className="text-4xl text-center">{t('signup.signup')}</h1>
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
        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

        <button className="mt-8 w-full p-4 bg-sky-500/100">{t('signup.signup')}</button>
        <p className="my-2 text-sm text-slate-500 flex justify-between">
          <b>{t('signup.alreadyHaveAccount') + ' '}</b>
          <Link href="/login">
            <u>{t('signin.login')}</u>
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
