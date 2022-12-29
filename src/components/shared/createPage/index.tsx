interface Props {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
}

export function Page({ title, subTitle, children }: Props): JSX.Element {
  return (
    <div className='flex flex-col px-2.5 page-header'>
      <div className='flex jutify-between p-[15px]'>
        <h2 className='text-xl text-white font-medium'>
          {title}
          <small className='block text-white text-[13px] font-normal mt-2'>{subTitle}</small>
        </h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
