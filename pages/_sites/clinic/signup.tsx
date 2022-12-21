import React from 'react';
import SignUpContainer from 'components/signup';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function Signup() {
  return <SignUpContainer />;
}
