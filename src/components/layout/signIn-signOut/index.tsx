import React from 'react';
import SignInSignUpFooter from './Footer';
import Navbar from './Navbar';
import styles from './styles.css';

interface Props {
  children: React.ReactNode;
  type: 'SIGN UP' | 'SIGN IN';
}

function SignInSignOutLayout({ children, type = 'SIGN UP' }: Props) {
  return (
    <div className={styles.container}>
      <Navbar signType={type} />
      {children}
      <SignInSignUpFooter />
    </div>
  );
}

export default SignInSignOutLayout;
