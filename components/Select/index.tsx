
import * as React from 'react';
import {
  Listbox,
  Transition
} from '@headlessui/react';
import {
  Props as HeadlessUIProps,
  PropsOf as HeadlessUIPropsOf
} from '@headlessui/react/dist/types';
import clsx from 'clsx';

const SelectLabel = (props: HeadlessUIProps<typeof Listbox.Label>): JSX.Element => (
  <Listbox.Label {...props} />
);

const SelectButton = ({
  className,
  ...rest
}: HeadlessUIProps<typeof Listbox.Button>): JSX.Element => (
  <Listbox.Button
    className={clsx(
      'bg-paper',
      'relative',
      'w-full',
      'border',
      'rounded-md',
      'shadow-sm',
      'pl-3',
      'pr-10',
      'py-2',
      'text-left',
      'focus:outline-none',
      className
    )}
    {...rest} />
);

const SelectOption = ({
  className,
  ...rest
}: HeadlessUIPropsOf<typeof Listbox.Option>): JSX.Element => (
  <Listbox.Option
    className={({ active }) =>
      clsx(
        { 'text-white bg-pink-600': active },
        'cursor-pointer',
        'select-none',
        'relative',
        'py-2',
        'pl-3',
        'pr-9',
        'focus:outline-none',
        className
      )
    }
    {...rest} />
);

const Select = ({
  value,
  onChange,
  labelElement,
  buttonElement,
  optionElements
}: SelectProps & HeadlessUIPropsOf<typeof Listbox>): JSX.Element => {
  return (
    <Listbox
      value={value}
      onChange={onChange}>
      {({ open }) => (
        <>
          {labelElement}
          <div className='relative'>
            {buttonElement}
            <Transition
              show={open}
              as={React.Fragment}
              leave={clsx(
                'transition',
                'ease-in',
                'duration-100'
              )}
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Listbox.Options
                static
                className={clsx(
                  'absolute',
                  'mt-1',
                  'w-full',
                  'bg-paper',
                  'shadow-md',
                  'max-h-60',
                  'rounded-md',
                  'py-2',
                  'text-base',
                  'overflow-auto',
                  'focus:outline-none'
                )}>
                {optionElements}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

export interface SelectProps {
  labelElement: JSX.Element;
  buttonElement: JSX.Element;
  optionElements: JSX.Element;
}

export {
  SelectLabel,
  SelectButton,
  SelectOption
};

export default Select;
