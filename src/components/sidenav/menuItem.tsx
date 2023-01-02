import classNames from 'classnames';
import { useRouter } from 'next/router';
import React from 'react';
import { menuitemType } from './utils';

type Props = {
  item: menuitemType;
  children?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  activeStyle?: string;
  onClick?: () => void;
};

export default function MenuItem({
  item,
  className = '',
  rightIcon = <React.Fragment />,
  children = <React.Fragment />,
  activeStyle = 'font-bold text-primary',
  onClick = () => {},
}: Props) {
  const { label, icon, path, display } = item;
  const router = useRouter();

  if (!display) return <React.Fragment></React.Fragment>;
  return (
    <li
      className={classNames(
        'flex flex-col w-full cursor-pointer text-4 capitalize py-[14px] px-[10px]',
        {
          'text-gray-darker': path !== router.asPath,
          'absolute bottom-0 left-0 py-5 px-[30px] bg-gradient-to-r from-slate-300 to-slate-100': item.static
        },
        className,
        path === router.asPath && activeStyle
      )}
      onClick={onClick}
    >
      <a
        onClick={() => path.length && router.push(path)}
        className='flex justify-between items-center hover:text-primary'
      >
        <div className='flex gap-4 items-center '>
          {!!icon && icon}
          {label}
        </div>
        {rightIcon}
      </a>
      {children}
    </li>
  );
}
