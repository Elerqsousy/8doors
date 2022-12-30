import { Button, Page, Section } from 'components/shared';
import React from 'react';

export default function ClinicPage() {
  return (
    <Page title='Home Page' subTitle='sub-text' showSiderMenu>
      <Section title='Book Appointment' subtitle='Description text here...'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
        <div className='flex flex-wrap gap-x-2.5 mt-5'>
          <Button fit>submit</Button>
          <Button fit disabled design='secondary'>cancel</Button>
        </div>
      </Section>
      <Section className='w-1/2' title='Book Appointment'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 2</div>
      </Section>
      <Section className='w-1/2'>
        <div className='h-[100px] w-full bg-gray-lighter'>content 3</div>
        <div className='flex flex-wrap gap-x-2.5 mt-5'>
          <Button>submit</Button>
          <Button design='secondary'>cancel</Button>
        </div>
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
        <div className='flex flex-wrap gap-x-2.5 mt-5'>
          <Button>submit</Button>
          <Button design='secondary'>cancel</Button>
        </div>
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
