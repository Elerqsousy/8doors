import React from 'react';
import styles from './styles.css';
interface Props {
  signType: 'SIGN UP' | 'SIGN IN';
}
function Navbar({ signType }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className={styles.logo}>8door</div>
      <div className="flex justify-evenly items-center">
        <button className={`${styles.signUpBtn} btn rounded bg-white`}>{signType}</button>
      </div>
    </div>
  );
}

export default Navbar;
