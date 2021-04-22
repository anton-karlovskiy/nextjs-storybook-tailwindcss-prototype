
import {
  Story,
  Meta
} from '@storybook/react';

import Accordion, {
  AccordionProps,
  AccordionPanel
} from './';

const Template: Story<AccordionProps> = args => <Accordion {...args} />;

const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <AccordionPanel
        header='header1'
        headerClass=''>
        content1
      </AccordionPanel>
      <AccordionPanel
        header='header2'
        headerClass=''>
        content2
      </AccordionPanel>
    </>
  )
};

export {
  Default
};

export default {
  title: 'Accordion',
  component: Accordion
} as Meta;
