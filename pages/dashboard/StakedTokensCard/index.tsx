
import * as React from 'react';
import clsx from 'clsx';

import StakeModal from '../StakeModal';
import Paper from 'components/Paper';
import Chip from 'components/Chip';
import UnizenButton from 'components/UI/UnizenButton';
import ImageLogoIcon from 'assets/icons/image-logo.svg';

interface Props {
  className: string;
  label: string;
  tokenQuantity: number;
  tokenUnit: string;
  valueOfTokenQuantity: number;
  tvl: number;
  valueOfTvl: number;
}

// TODO: should format numbers with separating commas
const StakedTokensCard = ({
  className,
  label,
  tokenQuantity,
  tokenUnit,
  valueOfTokenQuantity,
  tvl,
  valueOfTvl
}: Props): JSX.Element => {
  const [stakeModalOpen, setStakeModalOpen] = React.useState(false);

  const handleStakeModalOpen = () => {
    setStakeModalOpen(true);
  };

  const handleStakeModalClose = () => {
    setStakeModalOpen(false);
  };

  return (
    <>
      <Paper
        className={clsx(
          'p-1.5',
          className
        )}>
        <div
          className={clsx(
            'flex',
            'items-center',
            'space-x-1'
          )}>
          <h6
            className={clsx(
              'flex-1',
              'text-xs',
              'whitespace-nowrap',
              'font-medium'
            )}>
            {label}
          </h6>
          <span
            className={clsx(
              'flex-grow',
              'flex-shrink'
            )} />
          <UnizenButton
            className='flex-1'
            variant='outlined'
            color='primary'>
            Unstake
          </UnizenButton>
          <UnizenButton
            onClick={handleStakeModalOpen}
            className='flex-1'
            variant='outlined'
            color='primary'>
            Stake
          </UnizenButton>
        </div>
        <div
          className={clsx(
            'p-4',
            'space-y-1.5'
          )}>
          <div
            className={clsx(
              'flex',
              'justify-center',
              'items-center',
              'space-x-1'
            )}>
            <div
              className={clsx(
                'inline-flex',
                'w-9',
                'h-9',
                'bg-unizenPolar',
                'rounded-lg',
                'grid',
                'place-items-center'
              )}>
              <ImageLogoIcon
                width={21}
                height={21} />
            </div>
            <span
              className={clsx(
                'text-2xl',
                'font-light'
              )}>
              {tokenQuantity}&nbsp;{tokenUnit}
            </span>
            <Chip
              className={clsx(
                'text-unizenOxfordBlue',
                'bg-unizenOxfordBlue',
                'bg-opacity-10'
              )}>
              ${valueOfTokenQuantity}
            </Chip>
          </div>
          <p
            className={clsx(
              'text-xs',
              'font-medium',
              'text-textSecondary',
              'text-center'
            )}>
            TVL&nbsp;{tvl}&nbsp;ZCX&nbsp;(${valueOfTvl})
          </p>
        </div>
      </Paper>
      <StakeModal
        open={stakeModalOpen}
        onClose={handleStakeModalClose} />
    </>
  );
};

export default StakedTokensCard;
