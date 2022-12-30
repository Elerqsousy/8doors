import { SectionHeader } from '../sectionHeader';

type Props = {
  children?: React.ReactNode;
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
  closable?: boolean;
};

export function Section({
  children,
  title,
  subtitle,
  closable = false,
}: Props) {
  return (
    <section className='mx-[15px] mb-[30px] rounded-[.1875rem] bg-white relative'>
      {title?.length && <SectionHeader title={title} subtitle={subtitle} />}
      <div className='p-5'>{children}</div>
    </section>
  );
}
