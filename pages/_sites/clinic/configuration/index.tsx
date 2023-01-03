import { CollapsibleSection, Page, Section, Table } from 'components/shared';
import React from 'react';

export default function Configuration() {
  return (
    <Page title='Configuration Page' subTitle='sub-text' showSiderMenu>
      <Section childernClassName='flex flex-col gap-[15px] px-0'>
        <CollapsibleSection
          title='Doctors'
          className='!bg-gray-lighter !m-0 !p-0'
          childernClassName='!px-0'
        >
          <Table />
        </CollapsibleSection>
        <CollapsibleSection
          title='Staff'
          className='!bg-gray-lighter !m-0 !p-0'
          childernClassName='!px-0'
        >
          <Table />
        </CollapsibleSection>
      </Section>
    </Page>
  );
}
