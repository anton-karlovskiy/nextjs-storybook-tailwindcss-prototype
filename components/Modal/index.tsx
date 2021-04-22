
import * as React from 'react';
import {
  Dialog,
  Transition
} from '@headlessui/react';
import { PropsOf } from '@headlessui/react/dist/types';
import clsx from 'clsx';

const ModalTitle = (props: PropsOf<typeof Dialog.Title>): JSX.Element => (
  <Dialog.Title {...props} />
);

const Modal = ({
  open = false,
  onClose,
  children
}: Props): JSX.Element => {
  return (
    <Transition
      show={open}
      as={React.Fragment}>
      <Dialog
        className={clsx(
          'fixed',
          'inset-0',
          'z-unizenModal',
          'overflow-y-auto'
        )}
        static
        open={open}
        onClose={onClose}>
        <div
          className={clsx(
            'min-h-screen',
            'px-4',
            'text-center'
          )}>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <Dialog.Overlay
              className={clsx(
                'fixed',
                'inset-0'
              )} />
          </Transition.Child>
          {/* MEMO: this element is to trick the browser into centering the modal contents. */}
          <span
            className={clsx(
              'hidden',
              'sm:inline-block',
              'sm:align-middle',
              'sm:h-screen'
            )}
            aria-hidden='true'>
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <div
              className={clsx(
                'inline-block',
                'p-5',
                'overflow-hidden',
                'text-left',
                'sm:align-middle',
                'transition-all',
                'transform',
                'w-full',
                'max-w-lg',
                'my-8',
                'bg-paper',
                'bg-opacity-70',
                'backdrop-filter',
                'backdrop-blur-lg',
                'rounded-3xl',
                'border',
                'border-solid',
                'border-unizenPorcelain'
              )}>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export {
  ModalTitle
};

export interface Props {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default Modal;
