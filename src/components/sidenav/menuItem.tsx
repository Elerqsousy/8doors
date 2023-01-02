import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ReactIcon } from 'components/shared';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { menuitemType } from './utils';

type Props = {
  item: menuitemType;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

export default function MenuItem({
  item,
  rightIcon = <React.Fragment />,
  children = <React.Fragment />,
}: Props) {
  const { label, icon, path, display } = item;
  const router = useRouter();

  if (!display) return <React.Fragment></React.Fragment>;
  return (
    <li
      className={classNames(
        'flex flex-col w-full cursor-pointer text-4 capitalize py-[14px] px-[10px] relative hover:text-primary',
        {
          'font-bold text-primary': path === router.asPath,
          'text-gray-darker': path !== router.asPath,
        }
      )}
    >
      <Link href='/' className='flex justify-between items-center'>
        <div className='flex gap-4 items-center '>
          {!!icon && <FontAwesomeIcon icon={icon} className='w-[14px] h-[14px]' />}
          {label}
        </div>
        {rightIcon}
      </Link>
      {children}
    </li>
  );
}
