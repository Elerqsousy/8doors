import useWindowSize from 'hooks/useWindowSize';
import React from 'react';
import styles from './style.module.css';
import Bars from 'assets/bars.svg';
import CustomInput from 'components/shared/customInput';

type Props = {
  setToggle: Function;
};

function Navbar({ setToggle }: Props) {
  const { width } = useWindowSize();

  return (
    <nav className={`${styles.navbar} bg-sky-500/100`}>
      <div className="flex justify-between h-full items-center">
        {width <= 1184 ? (
          <button onClick={() => setToggle((s: boolean) => !s)}>
            <Bars style={{ height: 23, width: 43, color: '#fff' }} />
          </button>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <CustomInput
          placeholder="search"
          containerStyle={styles.containerStyle}
          className={`signin-signout-input w-full rounded-lg ${styles.searchInput}`}
        />
      </div>
    </nav>
  );
}

export default Navbar;
