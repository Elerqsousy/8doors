import React from 'react';
import SignInContainer from 'components/login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default function SignIn() {
  return <SignInContainer />;
}
