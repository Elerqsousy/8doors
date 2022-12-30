type Props = {
  title?: string | null | undefined;
  subtitle?: string | null | undefined;
};

export function SectionHeader({ title, subtitle }: Props) {
  const first = title?.split(' ')[0];
  const rest = title?.split(' ').slice(1).join(' ');

  return (
    <div className='p-5'>
      <h2 className='section-heaeder relative text-[15px] capitalize text-gray-dark'>
        <strong className='text-primary  leading-5'>{first} {' '}</strong>
        {rest}
        {subtitle?.length && <small className='block text-gray-light normal-case'>{subtitle}</small>}
      </h2>
    </div>
  );
}
