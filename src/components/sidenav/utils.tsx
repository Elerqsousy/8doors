import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faHome, faUser, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type menuitemType = {
  label: string;
  icon: IconDefinition;
  path?: string;
  display?: boolean;
  submenu?: menuItemsType[] | {}[] | null;
}

export type menuItemsType = menuitemType[];

export const mainMenuItems: menuItemsType = [
  {
    label: 'Dashboard',
    icon: faHome,
    submenu: null,
    display: true,
    path: '/',
  },
  {
    label: 'Appointments',
    icon: faCalendarCheck,
    submenu: null,
    display: true,
    path: '/appointments',
  },
  {
    label: 'Doctors',
    icon: faUserPlus,
    display: true,
    path: '',
    submenu: [
      {
        label: 'All Doctors',
        display: true,
        path: '/doctors',
      },
      {
        label: 'Add Doctor',
        display: true,
        path: '/add-doctor',
      },
      {
        label: 'Doctor Profile',
        display: true,
        path: '/doctor-profile',
      },
    ],
  },
];
