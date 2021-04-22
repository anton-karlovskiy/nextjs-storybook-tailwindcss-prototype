
import clsx from 'clsx';

import SwapCard from 'components/SwapCard';
import SwapCurrencyField from 'components/SwapCurrencyField';
import UnizenButton from 'components/UI/UnizenButton';

const Uniswap = (): JSX.Element => (
  <main
    className={clsx(
      'min-h-screen',
      'flex',
      'flex-col',
      'justify-center'
    )}>
    <SwapCard className='space-y-2.5'>
      <div className='space-y-1'>
        <SwapCurrencyField
          id='from'
          label='FROM' />
        <SwapCurrencyField
          id='to'
          label='TO' />
      </div>
      <UnizenButton
        variant='contained'
        color='primary'
        className='w-full'>
        Swap
      </UnizenButton>
    </SwapCard>
  </main>
);

export default Uniswap;
