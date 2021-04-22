
import * as React from 'react';
import clsx from 'clsx';
import format from 'date-fns/format';

import Chip from 'components/Chip';
import Tabs, {
  Tab,
  TabPanel
} from 'components/Tabs';
import List, { ListItem } from 'components/List';
import UnizenButton from 'components/UI/UnizenButton';
import RuneRewardIcon from 'assets/icons/rune-reward.svg';
import BtcRewardIcon from 'assets/icons/btc-reward.svg';
import LinkRewardIcon from 'assets/icons/link-reward.svg';
import UniRewardIcon from 'assets/icons/uni-reward.svg';
import BusdRewardIcon from 'assets/icons/busd-reward.svg';

const STAKING_REWARD_ITEMS = [
  {
    id: 1,
    icon: <RuneRewardIcon />,
    tokenQuantity: 250,
    tokenUnit: 'RUNE',
    valueOfTokenQuantity: 2560,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2021, 11, 31)
  },
  {
    id: 2,
    icon: <BtcRewardIcon />,
    tokenQuantity: 0.00123,
    tokenUnit: 'BTC',
    valueOfTokenQuantity: 13900,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2021, 11, 25)
  },
  {
    id: 3,
    icon: <LinkRewardIcon />,
    tokenQuantity: 0.02,
    tokenUnit: 'LINK',
    valueOfTokenQuantity: 8566,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2021, 11, 18)
  },
  {
    id: 4,
    icon: <UniRewardIcon />,
    tokenQuantity: 13.23,
    tokenUnit: 'UNI',
    valueOfTokenQuantity: 0,
    startDate: new Date(2021, 11, 10),
    expiryDate: new Date(2022, 0, 1)
  },
  {
    id: 5,
    icon: <BusdRewardIcon />,
    tokenQuantity: 1443.23,
    tokenUnit: 'BUSD',
    valueOfTokenQuantity: 0,
    startDate: new Date(2021, 11, 7),
    expiryDate: new Date(2022, 0, 1)
  },
  {
    id: 6,
    icon: <RuneRewardIcon />,
    tokenQuantity: 250,
    tokenUnit: 'RUNE',
    valueOfTokenQuantity: 0,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2020, 9, 21)
  },
  {
    id: 7,
    icon: <BtcRewardIcon />,
    tokenQuantity: 0.00123,
    tokenUnit: 'BTC',
    valueOfTokenQuantity: 0,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2020, 9, 21)
  },
  {
    id: 8,
    icon: <LinkRewardIcon />,
    tokenQuantity: 0.02,
    tokenUnit: 'LINK',
    valueOfTokenQuantity: 0,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2020, 9, 21)
  },
  {
    id: 9,
    icon: <UniRewardIcon />,
    tokenQuantity: 13.23,
    tokenUnit: 'UNI',
    valueOfTokenQuantity: 0,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2020, 9, 21)
  },
  {
    id: 10,
    icon: <BusdRewardIcon />,
    tokenQuantity: 1443.23,
    tokenUnit: 'BUSD',
    valueOfTokenQuantity: 0,
    startDate: new Date(2020, 0, 1),
    expiryDate: new Date(2020, 9, 21)
  }
];

interface CurrentTabPanelContentProps {
  items: {
    id: string | number;
    icon: React.ReactNode;
    tokenQuantity: number;
    tokenUnit: string;
    valueOfTokenQuantity: number;
    startDate: Date;
    expiryDate: Date;
  }[];
}

const TabPanelContent = ({ items }: CurrentTabPanelContentProps) => {
  const now = new Date();

  return (
    <List>
      {items.map(item => {
        const expired = item.startDate < now && item.expiryDate < now;
        const onGoing = now > item.startDate && now < item.expiryDate;
        const notStarted = item.startDate > now && item.expiryDate > now;

        return (
          <ListItem
            key={item.id}
            className={clsx(
              'flex',
              'items-center',
              'space-x-2.5'
            )}>
            {item.icon}
            <div
              className={clsx(
                'flex',
                'flex-col',
                'justify-center'
              )}>
              <div
                className={clsx(
                  'text-textPrimary',
                  'font-sm',
                  'font-medium'
                )}>
                {item.tokenQuantity}&nbsp;{item.tokenUnit}
              </div>
              <div
                className={clsx(
                  'flex',
                  'items-center',
                  'space-x-2.5'
                )}>
                <span
                  className={clsx(
                    'text-textSecondary',
                    'text-xs',
                    'font-medium'
                  )}>
                  ${item.valueOfTokenQuantity}
                </span>
                {expired && (
                  <Chip
                    className={clsx(
                      'text-unizenRegentGray',
                      'bg-unizenOxfordBlue',
                      'bg-opacity-10'
                    )}>
                    Expired&nbsp;{format(item.expiryDate, 'd MMM')}
                  </Chip>
                )}
                {onGoing && (
                  <Chip
                    className={clsx(
                      'text-unizenRegentGray',
                      'bg-unizenOxfordBlue',
                      'bg-opacity-10'
                    )}>
                    Expires&nbsp;{format(item.expiryDate, 'd MMM')}
                  </Chip>
                )}
                {notStarted && (
                  <Chip
                    className={clsx(
                      'text-unizenJava',
                      'bg-unizenPolar'
                    )}>
                    Starts&nbsp;{format(item.startDate, 'd MMM')}
                  </Chip>
                )}
              </div>
            </div>
            <span className='flex-grow' />
            <UnizenButton
              disabled={notStarted || expired}
              variant='outlined'
              color='primary'>
              Claim Reward
            </UnizenButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const currentRewardItems = STAKING_REWARD_ITEMS.filter(item => {
  const now = new Date();
  const notStarted = item.startDate > now && item.expiryDate > now;
  const onGoing = now > item.startDate && now < item.expiryDate;

  return notStarted || onGoing;
});

const expiredRewardItems = STAKING_REWARD_ITEMS.filter(item => {
  const now = new Date();
  const expired = item.startDate < now && item.expiryDate < now;

  return expired;
});

const REWARD_TAB_ITEMS = [
  {
    id: 'current',
    label: 'Current',
    tabPanelContent: (
      <>
        <TabPanelContent items={currentRewardItems} />
        <UnizenButton
          className='w-full'
          variant='contained'
          color='primary'>
          Claim All Rewards
        </UnizenButton>
      </>
    )
  },
  {
    id: 'expired',
    label: 'Expired',
    tabPanelContent: <TabPanelContent items={expiredRewardItems} />
  }
];

const RewardTabs = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
      <Tabs>
        {REWARD_TAB_ITEMS.map((tabItem, index) => (
          <Tab
            key={tabItem.id}
            id={tabItem.id}
            selected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}>
            {tabItem.label}
          </Tab>
        ))}
      </Tabs>
      {REWARD_TAB_ITEMS.map((rewardTabItem, index) => (
        <TabPanel
          key={rewardTabItem.id}
          id={rewardTabItem.id}
          index={index}
          selectedIndex={selectedIndex}>
          {rewardTabItem.tabPanelContent}
        </TabPanel>
      ))}
    </>
  );
};

export default RewardTabs;
