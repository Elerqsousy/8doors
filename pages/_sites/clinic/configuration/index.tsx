import { Button, CollapsibleSection, Page, Section } from 'components/shared';
import React from 'react';

export default function Configuration() {
  return (
    <Page title='Configuration Page' subTitle='sub-text' showSiderMenu>
      <Section childernClassName='flex flex-col gap-[15px] px-0'>
        <CollapsibleSection
          title='Doctors'
          className='!bg-gray-lighter !m-0 !p-0'
        >
          <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
          <div className='flex flex-wrap gap-x-2.5 mt-5'>
            <Button fit>submit</Button>
            <Button fit disabled design='secondary'>
              cancel
            </Button>
          </div>
        </CollapsibleSection>
        <CollapsibleSection
          title='Staff'
          className='!bg-gray-lighter !m-0 !p-0'
        >
          <div className='h-[100px] w-full bg-gray-lighter'>content 1</div>
          <div className='flex flex-wrap gap-x-2.5 mt-5'>
            <Button fit>submit</Button>
            <Button fit disabled design='secondary'>
              cancel
            </Button>
          </div>
        </CollapsibleSection>
      </Section>
    </Page>
  );
}
