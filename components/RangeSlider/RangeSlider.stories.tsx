
import {
  Story,
  Meta
} from '@storybook/react';

import RangeSlider from './';

const Template: Story = args => <RangeSlider {...args} />;

const Default = Template.bind({});
Default.args = {};

export {
  Default
};

export default {
  title: 'RangeSlider',
  component: RangeSlider
} as Meta;
