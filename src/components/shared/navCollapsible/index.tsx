import React, { Children } from 'react';
import { ReactIcon } from '../icon';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import classNames from 'classnames';
import { Section } from '../section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title?: string | number;
  leftIcon?: React.ReactElement;
  icon?: React.ReactElement | null | undefined;
  children: React.ReactElement | React.ReactElement[] | null | undefined, 
  items?: {
    icon?: React.ReactElement;
    onClick: Function;
    name: string | number;
    id: string | number;
  }[];
}

export function CollapsibleSection({
  icon = <React.Fragment></React.Fragment>,
  title,
  items = [],
  children,
}: Props) {
  const [open, toggle] = React.useState(false);

  return (
     <Section className='relative'>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={classNames('w-[10px] h-[10px] absulote top-0 right-0 transition-all ease-in-out duration-700', {
            'rotate-90': open,
          })}
          onClick={() => toggle(!open)}
        />
        <div className={classNames("transition ease-in-out duration-700", {'hidden': !open})}>
          {children}
        </div>
    </Section>
  );
}
