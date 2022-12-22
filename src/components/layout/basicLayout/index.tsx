import Navbar from 'components/navbar';
import SideNav from 'components/sidenav';
import useWindowSize from 'hooks/useWindowSize';
import React, { useState } from 'react';
import styles from './style.module.css';

type Props = {
  children?: React.ReactNode;
};

function BasicLayout({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowSize();
  return (
    <React.Fragment>
      <SideNav toggle={toggle} setToggle={setToggle} />
      <div
        style={{
          marginLeft: width > 1184 ? '250px' : 0,
          backgroundColor: '#fff',
        }}
      >
        <Navbar setToggle={setToggle} />
        <div
          className={styles.container}
          style={{
            backgroundColor: width > 1184 ? '#f8f9fa' : toggle ? 'rgba(0,0,0,0.4)' : '#f8f9fa',
          }}
        >
          {children}
        </div>
      </div>
    </React.Fragment>
  );
}

export default BasicLayout;
