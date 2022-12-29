import Navbar from 'components/navbar';
import SideNav from 'components/sidenav';
import useWindowSize from 'hooks/useWindowSize';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {
  children?: React.ReactNode;
};

function BasicLayout({ children }: Props) {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();

  return (
    <React.Fragment>
      <SideNav toggle={toggle} setToggle={setToggle} />
      <div
        style={{
          marginLeft: width > 1184 && router.locale !== 'ar' ? '250px' : 0,
          backgroundColor: '#fff',
          marginRight: width > 1184 && router.locale === 'ar' ? '250px' : 0,
        }}
      >
        <Navbar setToggle={setToggle} />
        {children}
      </div>
    </React.Fragment>
  );
}

export default BasicLayout;
