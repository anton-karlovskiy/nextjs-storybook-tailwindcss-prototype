
import clsx from 'clsx';

import Paper from 'components/Paper';
import List, { ListItem } from 'components/List';
import ErrorOutlineIcon from 'assets/icons/error-outline.svg';

const TOTAL_SAVING_ITEMS = [
  {
    id: 1,
    title: 'Saved Sum',
    value: '$2403',
    description: 'Saved in trades, by trading on the Unizen Ecosystem.'
  },
  {
    id: 2,
    title: 'Acquired Multi-asset staking',
    value: '$2444',
    description: 'You have acquired multi-asset staking rewards sum.'
  },
  {
    id: 3,
    title: 'Saved Sum',
    value: '3042%',
    description: 'You have been eligible to participate in 3 seed rounds and 1 private sale round.'
  }
];

const TotalSavingsCard = (): JSX.Element => (
  <Paper
    style={{
      border: 'none'
    }}
    className={clsx(
      'space-y-4'
    )}>
    <h6
      className={clsx(
        'text-xs',
        'space-x-1',
        'font-medium',
        'flex',
        'items-center'
      )}>
      <span>
        Total Savings
      </span>
      <span className='text-textSecondary'>
        /
      </span>
      <span className='text-textSecondary'>
        Gains by using Unizen
      </span>
      <span className='flex-grow' />
      <span
        className={clsx(
          'block',
          'border',
          'border-solid',
          'border-unizenPorcelain',
          'rounded',
          'p-1'
        )}>
        <ErrorOutlineIcon
          className='text-textSecondary'
          width={13}
          height={13} />
      </span>
    </h6>
    <h3
      className={clsx(
        'text-primary',
        'text-4xl',
        'text-center'
      )}>
      +$1340.5
    </h3>
    <List>
      {TOTAL_SAVING_ITEMS.map(totalSavingItem => (
        <ListItem
          key={totalSavingItem.id}
          className={clsx(
            'space-y-1'
          )}>
          <h6
            className={clsx(
              'font-medium',
              'text-xs'
            )}>
            {totalSavingItem.title}
          </h6>
          <h4
            className={clsx(
              'font-medium',
              'text-base'
            )}>
            {totalSavingItem.value}
          </h4>
          <p
            className={clsx(
              'text-textSecondary',
              'text-xs'
            )}>
            {totalSavingItem.description}
          </p>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default TotalSavingsCard;
