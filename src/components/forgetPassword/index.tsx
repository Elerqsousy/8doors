import CustomInput from 'components/shared/customInput';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Index() {
  const { t } = useTranslation('common');

  return (
    <div className="container flex items-center justify-center" style={{ minHeight: '100vh' }}>
      <div className="card px-10 py-10 w-96">
        <p className="text-slate-500">{t('forgetPassword.pleaseEnterYourEmail')}</p>
        <form>
          <CustomInput label={t('signup.email')} type="email" />
          <button className="mt-10 w-full p-4 bg-sky-500/100">
            {t('forgetPassword.sendMeResetCode')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Index;
