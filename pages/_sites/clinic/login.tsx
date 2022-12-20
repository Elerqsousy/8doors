import React from 'react';
import SignInContainer from 'components/login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en-US', ['common'])),
  },
});

export default function SignIn() {
  const router = useRouter();
  console.log(router);
  return <SignInContainer />;
}
