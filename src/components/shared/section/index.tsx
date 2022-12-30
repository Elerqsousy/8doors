import classNames from 'classnames';
import { SectionHeader } from '../sectionHeader';

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  containerClasses?: string;
  closable?: boolean;
};

export function Section({
  children,
  title,
  subtitle,
  containerClasses = '',
  closable = false,
}: Props) {
  return (
    <div className={classNames('grow flex px-[15px] mb-[30px] w-full relative', containerClasses)}>
      <section className='rounded-[.1875rem] bg-white w-full grow'>
      {title?.length && <SectionHeader title={title} subtitle={subtitle} />}
      <div className='p-5'>{children}</div>
    </section>
    </div>
  );
}
