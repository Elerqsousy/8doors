import BasicLayout from 'components/layout/basicLayout';
import { Page, Section } from 'components/shared';
import React from 'react';

export default function ClinicPage() {
  return (
    <Page title='Home Page' subTitle='sub-text' showSiderMenu>
      <Section title='Book Appointment' subtitle='Description text here...'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section>
      <Section containerClasses='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section>
      <Section containerClasses='w-1/3'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section>
      <Section containerClasses='w-1/4' title='Book Appointment'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section><Section containerClasses='w-1/4' title='Book Appointment'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section><Section containerClasses='w-1/4' title='Book Appointment'>
        <div className='h-[100px] w-full'>
          content
        </div>
      </Section>
    </Page>
  );
}
