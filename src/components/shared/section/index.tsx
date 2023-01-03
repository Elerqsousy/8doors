import classNames from 'classnames';
import { SectionHeader } from '../sectionHeader';

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  className?: string;
  childernClassName?: string;
  closable?: boolean;
  onClick?: () => void;
};

export function Section({
  children,
  title,
  subtitle,
  className = '',
  childernClassName = '',
  closable = false,
  onClick = () => {},
  ...rest
}: Props) {
  return (
    <div
      {...rest}
      className={classNames(
        'grow flex px-[15px] mb-[30px] w-full relative',
        className
      )}
    >
      <section className='rounded-[.1875rem] overflow-hidden bg-white w-full grow'>
        {title?.length && (
          <SectionHeader onClick={onClick} title={title} subtitle={subtitle} />
        )}
        <div
          className={classNames(
            'p-5 ease-in-out duration-300',
            childernClassName
          )}
        >
          {children}
        </div>
      </section>
    </div>
  );
}
