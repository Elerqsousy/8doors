import { Page, Section } from 'components/shared';
import React from 'react';

export default function ClinicPage() {
  return (
    <Page title='Home Page' subTitle='sub-text' showSiderMenu>
      <Section title='Book Appointment' subtitle='Description text here...'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
      </Section>
      <Section className='w-1/2' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 2</div>
      </Section>
      <Section className='w-1/2'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 3</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 4</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 5</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 6</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 4</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 5</div>
      </Section>
      <Section className='w-1/3' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 6</div>
      </Section>
    </Page>
  );
}
