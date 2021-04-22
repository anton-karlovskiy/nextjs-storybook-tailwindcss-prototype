
import * as React from 'react';
import {
  Story,
  Meta
} from '@storybook/react';
import clsx from 'clsx';

import Select, {
  SelectProps,
  SelectLabel,
  SelectButton,
  SelectOption
} from './';
import ArrowDropDownIcon from 'assets/icons/arrow-drop-down.svg';

const options = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' }
];

const Template: Story<SelectProps> = args => {
  const [selected, setSelected] = React.useState(options[3]);

  return (
    <Select
      {...args}
      value={selected}
      onChange={setSelected} />
  );
};

const Default = Template.bind({});
Default.args = {
  labelElement: (
    <SelectLabel>
      label
    </SelectLabel>
  ),
  buttonElement: (
    <SelectButton>
      <span
        className={clsx(
          'block',
          'truncate'
        )}>
        button
      </span>
      <span
        className={clsx(
          'absolute',
          'top-1/2',
          'right-0',
          'transform',
          '-translate-y-1/2',
          'w-7',
          'h-7',
          'rounded-full',
          'shadow-lg',
          'grid',
          'place-items-center',
          'mr-3',
          'pointer-events-none'
        )}>
        <ArrowDropDownIcon className='text-unizenRegentGray' />
      </span>
    </SelectButton>
  ),
  optionElements: (
    <>
      {options.map(option => (
        <SelectOption
          key={option.id}
          value={option}>
          {({
            selected,
            active
          }) => (
            <>
              <span
                className={clsx(
                  selected ? 'font-semibold' : 'font-normal',
                  'block',
                  'truncate'
                )}>
                {option.name}
              </span>
              {selected && (
                <span
                  className={clsx(
                    { 'text-white': active },
                    'absolute',
                    'inset-y-0',
                    'right-0',
                    'flex',
                    'items-center',
                    'pr-3'
                  )}>
                  SELECTED
                </span>
              )}
            </>
          )}
        </SelectOption>
      ))}
    </>
  )
};

export {
  Default
};

export default {
  title: 'Select',
  component: Select
} as Meta;
