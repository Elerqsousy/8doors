import React from 'react';
import Navbar from './Navbar';
import styles from './styles.css';

interface Props {
  children: React.ReactNode;
  type: 'SIGN UP' | 'SIGN IN';
}

function SigninSignOutLayout({ children, type = 'SIGN UP' }: Props) {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
    </div>
  );
}

export default SigninSignOutLayout;
