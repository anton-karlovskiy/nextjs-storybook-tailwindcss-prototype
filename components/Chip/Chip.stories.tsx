
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import Chip, { Props } from './';

const Template: Story<Props> = args => <Chip {...args} />;

const Chip1 = Template.bind({});
Chip1.args = {
  children: '$1215212',
  className: clsx(
    'text-unizenOxfordBlue',
    'bg-unizenOxfordBlue',
    'bg-opacity-10'
  )
};

const Chip2 = Template.bind({});
Chip2.args = {
  children: '$1215212',
  className: clsx(
    'text-unizenRegentGray',
    'bg-unizenOxfordBlue',
    'bg-opacity-10'
  )
};

const Chip3 = Template.bind({});
Chip3.args = {
  children: 'Starts 10 Dec',
  className: clsx(
    'text-unizenJava',
    'bg-unizenPolar'
  )
};

export {
  Chip1,
  Chip2,
  Chip3
};

export default {
  title: 'Chip',
  component: Chip
} as Meta;
