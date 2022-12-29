import BasicLayout from 'components/layout/basicLayout';

interface Props {
  title?: string;
  subTitle?: string;
  children: React.ReactNode;
  showSiderMenu: boolean;
}

export function Page({
  title,
  subTitle,
  children,
  showSiderMenu = false,
}: Props): JSX.Element {
  const Header = (): JSX.Element => {
    return (
      <div className='flex flex-col px-2.5 page-header h-[calc(screen - 190px)] relative'>
        <div className='flex jutify-between p-[15px] z-10'>
          <h2 className='text-xl text-white font-medium'>
            {title}
            <small className='block text-white text-[13px] font-normal mt-2'>
              {subTitle}
            </small>
          </h2>
        </div>
        <div className='z-10'>{children}</div>
      </div>
    );
  };
  if (showSiderMenu)
    return (
      <BasicLayout>
        <Header />
      </BasicLayout>
    );
  return <Header />;
}
