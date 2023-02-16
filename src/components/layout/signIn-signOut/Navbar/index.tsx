import React from 'react';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface Props {
  signType: 'SIGN UP' | 'SIGN IN';
  signOnClick: () => void;
}
function Navbar({ signType, signOnClick = () => {} }: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center ">
      <div className={classNames('cursor-pointer', styles.logo)} onClick={() => router.push('/')}>8door</div>
      <div className="flex justify-evenly items-center">
        <button
          className={`${styles.signUpBtn}
         btn rounded-lg bg-white`}
          onClick={signOnClick}
        >
          {signType}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
