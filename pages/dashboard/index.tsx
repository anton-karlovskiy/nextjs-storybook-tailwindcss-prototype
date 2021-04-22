
import clsx from 'clsx';

import StakedTokensCard from './StakedTokensCard';
import RewardOrAllocationCard from './RewardOrAllocationCard';
import RewardTabs from './RewardTabs';
import AllocationTabs from './AllocationTabs';
import BalanceCard from './BalanceCard';
import TotalSavingsCard from './TotalSavingsCard';
import MainLeftPanel from 'parts/MainLeftPanel';
import Paper from 'components/Paper';

const Dashboard = (): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex',
        'min-h-screen'
      )}>
      <MainLeftPanel
        className={clsx(
          'space-y-2.5'
        )}>
        <BalanceCard />
        <TotalSavingsCard />
      </MainLeftPanel>
      <div
        className={clsx(
          'flex-grow',
          'p-10',
          'space-y-2.5'
        )}>
        <Paper
          className={clsx(
            'bg-opacity-70',
            'space-y-4'
          )}>
          <div
            className={clsx(
              'flex',
              'space-x-2.5'
            )}>
            <StakedTokensCard
              className='flex-1'
              label='Staked ZCX Tokens'
              tokenQuantity={10000}
              tokenUnit='ZCX'
              valueOfTokenQuantity={1215212}
              tvl={241411.51}
              valueOfTvl={125151.25} />
            <StakedTokensCard
              className='flex-1'
              label='Staked LP Tokens'
              tokenQuantity={24}
              tokenUnit='UNI-V2'
              valueOfTokenQuantity={1215212}
              tvl={41411.51}
              valueOfTvl={15151.25} />
          </div>
          <div
            className={clsx(
              'flex',
              'items-center',
              'space-x-3.5'
            )}>
            <label
              htmlFor='meter'
              className='text-xs'>
              Entitled to reward/allocation pool size
            </label>
            <meter
              id='meter'
              value={2}
              min={0}
              max={10}
              className='flex-grow'>
              meter
            </meter>
          </div>
        </Paper>
        <Paper
          className={clsx(
            'bg-opacity-70',
            'flex'
          )}>
          <RewardOrAllocationCard
            className={clsx(
              'flex-1',
              'mx-3'
            )}
            label='Staking Rewards'>
            <RewardTabs />
          </RewardOrAllocationCard>
          <RewardOrAllocationCard
            className={clsx(
              'flex-1',
              'mx-3'
            )}
            label='Seed / Private Allocations'>
            <AllocationTabs />
          </RewardOrAllocationCard>
        </Paper>
      </div>
    </div>
  );
};

export default Dashboard;
