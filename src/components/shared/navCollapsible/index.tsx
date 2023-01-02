import React from 'react';
import { ReactIcon } from '../icon';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import classNames from 'classnames';

interface Props {
  title?: string | number;
  leftIcon?: React.ReactElement;
  icon?: React.ReactElement | null | undefined;
  items?: {
    icon?: React.ReactElement;
    onClick: Function;
    name: string | number;
    id: string | number;
  }[];
}

export function NavCollapsible({
  icon = <React.Fragment></React.Fragment>,
  title,
  items = [],
}: Props) {
  const [toggle, setToggle] = React.useState(false);

  return (
    <div className=' w-full ease-in-out duration-150 relative'>
      <div
        className={classNames(
          'drop-down flex items-center justify-between w-full hover:text-primary ease-in-out duration-150',
          { 'text-primary': toggle }
        )}
        onClick={() => setToggle((s) => !s)}
      >
        <div className={classNames('flex items-center gap-5')}>
          {icon}
          <h2>{title}</h2>
        </div>
        <ReactIcon
          className={classNames('cursor-pointer', { 'rotate-90': toggle })}
          icon={<MdOutlineKeyboardArrowRight />}
          color={toggle ? '#00cfd1' : '#546e7a'}
          hoverColor='#00cfd1'
          size='14px'
        />
      </div>

      <div
        className={classNames(
          'overflow-hidden transition-[height] ease-in-out duration-300'
        )}
        style={{ height: toggle ? '0' : 36 * items.length + 30 }}
      >
        {items.map((item) => (
          <div className='relative mt-3' key={item?.id}>
            <div
              className='flex gap-5 items-center  pl-5 pr-6 h-6  text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out'
              onClick={() => item?.onClick()}
            >
              {item?.icon}
              <h4 className='text-center'>{item?.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
