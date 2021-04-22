
import clsx from 'clsx';

import UnizenButton from 'components/UI/UnizenButton';
import EthereumIcon from 'assets/icons/ethereum.svg';
import KeyboardArrowDownIcon from 'assets/icons/keyboard-arrow-down.svg';

const SwapCurrencyField = ({
  id,
  label
}: Props): JSX.Element => (
  <div
    className={clsx(
      'px-2.5',
      'py-3.5',
      'flex',
      'items-end',
      'border',
      'border-solid',
      'border-unizenRegentGray',
      'rounded-2xl'
    )}>
    <div className='flex-grow'>
      <label
        className='text-textPrimary'
        htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type='number'
        className={clsx(
          'block',
          'w-full',
          'mt-2',
          'text-textPrimary',
          'placeholder-unizenRegentGray',
          'focus:outline-none'
        )}
        placeholder='0.0' />
    </div>
    <UnizenButton
      variant='text'
      startIcon={
        <EthereumIcon />
      }
      endIcon={
        <KeyboardArrowDownIcon
          className='text-unizenRegentGray'
          fill='currentColor' />
      }>
      ETH
    </UnizenButton>
  </div>
);

export interface Props {
  id: string;
  label: string;
}

export default SwapCurrencyField;
