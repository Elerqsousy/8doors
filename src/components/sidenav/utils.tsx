import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightLong,
  faCalendarCheck,
  faGear,
  faHome,
  faUser,
  faUserPlus,
  faClinicMedical,
} from '@fortawesome/free-solid-svg-icons';

export type menuitemType = {
  label?: string;
  icon?: React.ReactElement;
  path: string;
  display?: boolean;
  submenu?: menuItemsType;
  static?: number;
};

export type menuItemsType = menuitemType[];

export const mainMenuItems: menuItemsType = [
  {
    label: 'Dashboard',
    icon: <FontAwesomeIcon icon={faHome} className='w-[14px] h-[14px]' />,
    submenu: [],
    display: true,
    path: '/',
  },

  {
    label: 'Doctors',
    icon: <FontAwesomeIcon icon={faUserPlus} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctors',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Clinics',
    icon: (
      <FontAwesomeIcon icon={faClinicMedical} className='w-[14px] h-[14px]' />
    ),
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Clinics',
        display: true,
        path: '/select-clinic',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: 'Login',
    icon: <FontAwesomeIcon icon={faUser} className='w-[14px] h-[14px]' />,
    display: true,
    path: '',
    submenu: [
      {
        label: 'Login Page',
        display: true,
        path: '/login',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'SignUp Page',
        display: true,
        path: '/signup',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
      {
        label: 'Forgot Password',
        display: true,
        path: '/forget-password',
        icon: <FontAwesomeIcon icon={faArrowRightLong} className='w-[10px]' />,
      },
    ],
  },
  {
    label: '404 Page',
    icon: (
      <FontAwesomeIcon icon={faCalendarCheck} className='w-[14px] h-[14px]' />
    ),
    submenu: [],
    display: true,
    path: '/page-not-found',
    static: 2,
  },
  {
    label: 'Configuration',
    icon: <FontAwesomeIcon icon={faGear} className='w-[14px] h-[14px]' />,
    submenu: [],
    display: true,
    path: '/configuration',
    static: 1,
  },
];
