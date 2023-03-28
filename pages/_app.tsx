import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../src/redux';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    let dir = router.locale == 'ar' ? 'rtl' : 'ltr';
    let lang = router.locale == 'ar' ? 'ar' : 'en';
    document?.querySelector('html')?.setAttribute('dir', dir);
    document?.querySelector('html')?.setAttribute('lang', lang);
  }, [router.locale]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
