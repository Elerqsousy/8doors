import React from 'react';
import classNames from 'classnames';
import { Section } from '../section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  headerClassName?: string;
  childernClassName?: string;
};

export function CollapsibleSection({
  children,
  title,
  subtitle,
  className = '',
  headerClassName = '',

  childernClassName = '',
}: Props) {
  const [open, toggle] = React.useState(false);

  return (
    <Section
      className={classNames('relative', className)}
      title={title}
      subtitle={subtitle}
      onClick={() => toggle(!open)}
      headerClassName={classNames('cursor-pointer', headerClassName)}
      childernClassName={open ? childernClassName : '!py-0'}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
        className={classNames(
          'w-[14px] h-[14px] absolute top-[25px] right-[33px] transition-all ease-in-out duration-300',
          { 'rotate-90': open }
        )}
        onClick={() => toggle(!open)}
      />
      <div
        className={classNames(
          'transition-height overflow-hidden ease-in-out duration-200',
          { 'h-full': open, 'h-0': !open }
        )}
      >
        {children}
      </div>
    </Section>
  );
}
