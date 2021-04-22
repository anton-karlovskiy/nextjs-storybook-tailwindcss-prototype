
import {
  Story,
  Meta
} from '@storybook/react';

import UnizenButton, {
  Props,
  COLOR_VALUES,
  VARIANT_VALUES
} from './';
import EthereumIcon from 'assets/icons/ethereum.svg';

const Template: Story<Props> = args => <UnizenButton {...args} />;

const ContainedDefault = Template.bind({});
ContainedDefault.args = {
  children: 'UnizenButton',
  color: 'default',
  variant: 'contained'
};

const ContainedPrimary = Template.bind({});
ContainedPrimary.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'contained'
};

const ContainedSecondary = Template.bind({});
ContainedSecondary.args = {
  children: 'UnizenButton',
  color: 'secondary',
  variant: 'contained'
};

const ContainedPrimaryWithStartIcon = Template.bind({});
ContainedPrimaryWithStartIcon.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'contained',
  startIcon: (
    <EthereumIcon />
  )
};

const ContainedSecondaryWithStartIcon = Template.bind({});
ContainedSecondaryWithStartIcon.args = {
  children: 'UnizenButton',
  color: 'secondary',
  variant: 'contained',
  startIcon: (
    <EthereumIcon />
  )
};

const ContainedDisabled = Template.bind({});
ContainedDisabled.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'contained',
  disabled: true
};

const TextDefault = Template.bind({});
TextDefault.args = {
  children: 'UnizenButton',
  color: 'default',
  variant: 'text'
};

const TextPrimary = Template.bind({});
TextPrimary.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'text'
};

const TextSecondary = Template.bind({});
TextSecondary.args = {
  children: 'UnizenButton',
  color: 'secondary',
  variant: 'text'
};

const TextDisabled = Template.bind({});
TextDisabled.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'text',
  disabled: true
};

const OutlinedDefault = Template.bind({});
OutlinedDefault.args = {
  children: 'UnizenButton',
  color: 'default',
  variant: 'outlined'
};

const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'outlined'
};

const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  children: 'UnizenButton',
  color: 'secondary',
  variant: 'outlined'
};

const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
  children: 'UnizenButton',
  color: 'primary',
  variant: 'outlined',
  disabled: true
};

export {
  ContainedDefault,
  ContainedPrimary,
  ContainedSecondary,
  ContainedPrimaryWithStartIcon,
  ContainedSecondaryWithStartIcon,
  ContainedDisabled,
  TextDefault,
  TextPrimary,
  TextSecondary,
  TextDisabled,
  OutlinedDefault,
  OutlinedPrimary,
  OutlinedSecondary,
  OutlinedDisabled
};

export default {
  title: 'UI/UnizenButton',
  component: UnizenButton,
  argTypes: {
    color: {
      control: {
        type: 'radio',
        options: COLOR_VALUES
      }
    },
    variant: {
      control: {
        type: 'radio',
        options: VARIANT_VALUES
      }
    }
  }
} as Meta;
