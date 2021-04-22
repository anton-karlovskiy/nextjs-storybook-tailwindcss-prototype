
import clsx from 'clsx';

import Modal, {
  Props,
  ModalTitle
} from 'components/Modal';
import RangeSlider from 'components/RangeSlider';
import UnizenButton from 'components/UI/UnizenButton';

const StakeModal = ({
  open,
  onClose
}: Omit<Props, 'children'>): JSX.Element => (
  <Modal
    open={open}
    onClose={onClose}>
    <ModalTitle
      className={clsx(
        'font-medium',
        'text-xs'
      )}>
      Stake&nbsp;$ZCX
    </ModalTitle>
    <div
      className={clsx(
        'space-y-5'
      )}>
      <div
        className={clsx(
          // TODO: should create a reusable tailwindcss
          'divide-y',
          'divide-unizenRegentGray',
          'divide-opacity-20'
        )}>
        <div
          className={clsx(
            'flex',
            'items-center',
            'divide-x',
            'divide-unizenRegentGray',
            'divide-opacity-20',
            'py-3.5'
          )}>
          <div
            className={clsx(
              'text-4xl',
              'w-1/2',
              'space-x-2.5'
            )}>
            <span
              className={clsx(
                'font-medium'
              )}>
              312.34
            </span>
            <span
              className={clsx(
                'font-light'
              )}>
              ZCX
            </span>
          </div>
          <div
            className={clsx(
              'w-1/4',
              'font-medium',
              'text-xs',
              'px-2.5'
            )}>
            <span
              className={clsx(
                'text-textSecondary',
                'block'
              )}>
              Staked
            </span>
            <span className='block'>
              2434 ZCX
            </span>
          </div>
          <div
            className={clsx(
              'w-1/4',
              'font-medium',
              'text-xs',
              'px-2.5'
            )}>
            <span
              className={clsx(
                'text-textSecondary',
                'block'
              )}>
              Available
            </span>
            <span className='block'>
              43322 ZCX
            </span>
          </div>
        </div>
        <p
          className={clsx(
            'text-textSecondary',
            'text-xs',
            'font-medium',
            'py-3.5'
          )}>
          You are entitled to 10,000 USDC worth of allocation in Project X for a pre-sale price of $0.12.
          &nbsp;Read about the terms.
          &nbsp;Read about the project.
        </p>
      </div>
      <RangeSlider />
      <div
        className={clsx(
          'flex',
          'justify-center',
          'items-center',
          'bg-unizenWhiteLilac',
          'text-textSecondary',
          'h-8',
          'rounded',
          'text-xs'
        )}>
        <div
          className={clsx(
            'px-2.5',
            'py-1'
          )}>
          25%
        </div>
        <div
          className={clsx(
            'px-2.5',
            'py-1'
          )}>
          50%
        </div>
        <div
          className={clsx(
            'px-2.5',
            'py-1',
            'bg-unizenJava',
            'text-white',
            'rounded'
          )}>
          75%
        </div>
        <div
          className={clsx(
            'px-2.5',
            'py-1'
          )}>
          100%
        </div>
      </div>
      <div
        className={clsx(
          'grid',
          'grid-cols-2',
          'space-x-5'
        )}>
        <UnizenButton
          variant='outlined'>
          Cancel
        </UnizenButton>
        <UnizenButton
          variant='contained'
          color='primary'>
          Stake
        </UnizenButton>
      </div>
    </div>
  </Modal>
);

export default StakeModal;
