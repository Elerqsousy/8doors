import React from 'react';
import ForgerPasswordContainer from 'components/forgetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

function ForgetPassword() {
  return <ForgerPasswordContainer />;
}

export default ForgetPassword;
