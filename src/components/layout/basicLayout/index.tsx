import SideNav from 'components/sidenav';
import useWindowSize from 'hooks/useWindowSize';
import React, { useState } from 'react';

function BasicLayout() {
  const [toggle, setToggle] = useState(false);
  const { width } = useWindowSize();
  return (
    <React.Fragment>
      <SideNav toggle={toggle} />
    </React.Fragment>
  );
}

export default BasicLayout;
