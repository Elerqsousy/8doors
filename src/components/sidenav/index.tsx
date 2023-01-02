import useOnClickOutside from 'hooks/useOnClickOutside';
import useWindowSize from 'hooks/useWindowSize';
import React, { useRef } from 'react';
import styles from './style.module.css';
import Doctor from '../../assets/doctor.svg';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowRightLong,
  faCalendar,
  faHome,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { generate } from 'randomized-string';
import { useRouter } from 'next/router';
import { NavCollapsible } from 'components/shared';
import MenuItem from './menuItem';
import { mainMenuItems, menuItemsType } from './utils';

type props = {
  toggle: boolean;
  setToggle: Function;
};

function RenderMenuItems(list: menuItemsType) {
  return (
    <ul className='list-none'>
      {list.map((item) => {
        if (!item.submenu) {
          return <MenuItem key={generate(8)} item={item} />;
        }
        return <div>list Item</div>
      })}
    </ul>
  )
}

function SideNav({ toggle, setToggle }: props) {
  const { width } = useWindowSize();
  const ref = useRef(null);
  const router = useRouter();
  useOnClickOutside(ref, () => setToggle(false));
  return (
    <div
      className='sidenav z-50 shadow-2xl'
      ref={ref}
      style={{
        width: width > 1184 || toggle ? '250px' : 0,
      }}
    >

      <div className='h-full overflow-hidden width-auto p-[15px]'>
        <div className={`${styles.doctorProfile} mt-3`}>
          <div className={`${styles.imgContainer} rounded-full`}>
            <Doctor style={{ width: 80, height: 80 }} />
          </div>
          <h2 className='text-center'>Dr. Dagi</h2>
          <h5 className='text-center'>Neurologist</h5>
        </div>
        <h4 className='mt-[15px] py-2  text-gray-darker font-bold text-[11px]'>-- MAIN</h4>
        {RenderMenuItems(mainMenuItems)}
        {/* <div className={styles.main}>
          <div className='flex gap-5 items-center hover:text-gray-900 hover:bg-gray-100'>
            <FontAwesomeIcon icon={faHome} />
            Dashboard
          </div>
          <div className='flex gap-5 items-center hover:text-gray-900 hover:bg-gray-100'>
            <FontAwesomeIcon icon={faCalendar} />
            Appointment
          </div>
          <NavCollapsible
            title='Doctors'
            icon={<FontAwesomeIcon icon={faUserPlus} />}
            items={[
              {
                id: generate(8),
                onClick: () => router.push('/allDoctors'),
                name: 'All Doctors',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/addDoctor'),
                name: 'Add Doctor',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/doctorProfile'),
                name: 'Doctor profile',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
              {
                id: generate(8),
                onClick: () => router.push('/addDoctor'),
                name: 'Add Doctor',
                icon: <FontAwesomeIcon icon={faArrowRightLong} />,
              },
            ]}
          />

        </div> */}
      </div>
    </div>
  );
}

export default SideNav;
