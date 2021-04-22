
import * as React from 'react';
import clsx from 'clsx';

import Tabs, {
  Tab,
  TabPanel
} from 'components/Tabs';
import Accordion, { AccordionPanel } from 'components/Accordion';
import Chip from 'components/Chip';
import RangeSlider from 'components/RangeSlider';
import List, { ListItem } from 'components/List';
import UnizenLink from 'components/UI/UnizenLink';
import UnizenInput from 'components/UI/UnizenInput';
import UnizenButton from 'components/UI/UnizenButton';

const ALLOCATION_ITEMS = [
  {
    id: 1,
    allocationAmount: 10000,
    projectName: 'Project X',
    preSalePrice: 0.12,
    termsLink: '#terms-x',
    projectLink: '#project-x',
    claimTimings: [
      '3w',
      '1d',
      '4h:12m'
    ]
  },
  {
    id: 2,
    allocationAmount: 20000,
    projectName: 'Project Y',
    preSalePrice: 0.02,
    termsLink: '#terms-y',
    projectLink: '#project-y',
    claimTimings: [
      '4w',
      '2d',
      '5h:12m'
    ]
  },
  {
    id: 3,
    allocationAmount: 30000,
    projectName: 'Project Z',
    preSalePrice: 0.8,
    termsLink: '#terms-z',
    projectLink: '#project-z',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ]
  },
  {
    id: 4,
    allocationAmount: 40000,
    projectName: 'Project A',
    preSalePrice: 0.01,
    termsLink: '#terms-a',
    projectLink: '#project-a',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ],
    claimedDate: 'Claimed 21 Oct',
    address: '0xeE4a9Ab62C66C7a96e5E30717A8A91FcC2E52D42'
  },
  {
    id: 5,
    allocationAmount: 50000,
    projectName: 'Project B',
    preSalePrice: 0.02,
    termsLink: '#terms-b',
    projectLink: '#project-b',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ],
    claimedDate: 'Claimed 21 Oct',
    address: '0xeE4a9Ab62C66C7a96e5E30717A8A91FcC2E52D42'
  },
  {
    id: 6,
    allocationAmount: 60000,
    projectName: 'Project C',
    preSalePrice: 0.03,
    termsLink: '#terms-c',
    projectLink: '#project-c',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ],
    claimedDate: 'Claimed 21 Oct',
    address: '0xeE4a9Ab62C66C7a96e5E30717A8A91FcC2E52D42'
  },
  {
    id: 7,
    allocationAmount: 70000,
    projectName: 'Project D',
    preSalePrice: 0.04,
    termsLink: '#terms-d',
    projectLink: '#project-d',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ],
    claimedDate: 'Claimed 21 Oct',
    address: '0xeE4a9Ab62C66C7a96e5E30717A8A91FcC2E52D42'
  },
  {
    id: 8,
    allocationAmount: 80000,
    projectName: 'Project E',
    preSalePrice: 0.05,
    termsLink: '#terms-e',
    projectLink: '#project-e',
    claimTimings: [
      '5w',
      '3d',
      '6h:12m'
    ],
    claimedDate: 'Claimed 21 Oct',
    address: '0xeE4a9Ab62C66C7a96e5E30717A8A91FcC2E52D42'
  }
];

const ALLOCATION_TAB_ITEMS = [
  {
    id: 'upcoming',
    label: 'Upcoming',
    tabPanelContent: (
      <Accordion
        className={clsx(
          'divide-y',
          'divide-unizenPorcelain'
        )}>
        {ALLOCATION_ITEMS
          .filter(item => !item.claimedDate)
          .map(item => (
            <AccordionPanel
              key={item.id}
              header={
                <div
                  className={clsx(
                    'space-y-1',
                    'py-1.5'
                  )}>
                  <h5
                    className={clsx(
                      'font-medium',
                      'text-sm'
                    )}>
                    {`${item.allocationAmount} USDC in ${item.projectName} at $${item.preSalePrice}`}
                  </h5>
                  <div
                    className={clsx(
                      'flex',
                      'items-center',
                      'space-x-1'
                    )}>
                    <h6
                      className={clsx(
                        'font-medium',
                        'text-xs'
                      )}>
                      Allocation can be claimed in:
                    </h6>
                    <Chip
                      className={clsx(
                        'text-unizenRegentGray',
                        'bg-unizenOxfordBlue',
                        'bg-opacity-10'
                      )}>
                      <div
                        className={clsx(
                          'divide-x',
                          'divide-unizenRegentGray',
                          'divide-opacity-30'
                        )}>
                        {item.claimTimings.map(claimTiming => (
                          <span
                            key={claimTiming}
                            className='px-1'>
                            {claimTiming}
                          </span>
                        ))}
                      </div>
                    </Chip>
                  </div>
                </div>
              }>
              <div
                className={clsx(
                  'space-y-4',
                  'pb-1.5'
                )}>
                <div className='space-y-1'>
                  <p
                    className={clsx(
                      'text-textSecondary',
                      'font-medium',
                      'text-xs'
                    )}>
                    {/* eslint-disable-next-line max-len */}
                    {`You are entitled to ${item.allocationAmount} USDC worth of allocation in ${item.projectName} for a pre-sale price of $${item.preSalePrice}.`}
                    {/* eslint-disable-next-line max-len */}
                    &nbsp;Read <UnizenLink href={item.termsLink}>about the terms</UnizenLink>. Read <UnizenLink href={item.projectLink}>about the project</UnizenLink>.
                  </p>
                  <RangeSlider />
                </div>
                <div className='space-y-1.5'>
                  <h6
                    className={clsx(
                      'font-medium',
                      'text-xs'
                    )}>
                    Amount of allocation you want to claim
                  </h6>
                  <RangeSlider />
                  <UnizenInput />
                  <div
                    className={clsx(
                      'grid',
                      'grid-cols-2',
                      'items-center',
                      'space-x-5'
                    )}>
                    <UnizenButton
                      variant='outlined'
                      color='primary'>
                      Reject Allocation
                    </UnizenButton>
                    <UnizenButton
                      variant='contained'
                      color='primary'>
                      Claim Allocation
                    </UnizenButton>
                  </div>
                </div>
              </div>
            </AccordionPanel>
          ))}
      </Accordion>
    )
  },
  {
    id: 'claimed',
    label: 'Claimed',
    tabPanelContent: (
      <List>
        {ALLOCATION_ITEMS
          .filter(item => !!item.claimedDate)
          .map(item => (
            <ListItem
              key={item.id}
              className='space-y-2.5'>
              <div>
                <div
                  className={clsx(
                    'flex',
                    'items-center',
                    'space-x-2.5'
                  )}>
                  <h5
                    className={clsx(
                      'font-medium',
                      'text-sm'
                    )}>
                    {`${item.allocationAmount} USDC in ${item.projectName} at $${item.preSalePrice}`}
                  </h5>
                  <Chip
                    className={clsx(
                      'text-unizenRegentGray',
                      'bg-unizenOxfordBlue',
                      'bg-opacity-10'
                    )}>
                    {item.claimedDate}
                  </Chip>
                </div>
                <p
                  className={clsx(
                    'text-textSecondary',
                    'font-medium',
                    'text-xs'
                  )}>
                  {/* eslint-disable-next-line max-len */}
                  {`You are entitled to ${item.allocationAmount} USDC worth of allocation in ${item.projectName} for a pre-sale price of $${item.preSalePrice}.`}
                  {/* eslint-disable-next-line max-len */}
                  &nbsp;Read <UnizenLink href={item.termsLink}>about the terms</UnizenLink>. Read <UnizenLink href={item.projectLink}>about the project</UnizenLink>.
                </p>
              </div>
              <div
                className={clsx(
                  'text-xs',
                  'font-medium'
                )}>
                <h5>
                  Tokens will be sent to:
                </h5>
                <p className='text-textSecondary'>
                  {item.address}
                </p>
              </div>
              <div
                className={clsx(
                  'flex',
                  'items-center',
                  'space-x-2.5'
                )}>
                <h5
                  className={clsx(
                    'font-medium',
                    'text-xs'
                  )}>
                  Distribution will begin in:
                </h5>
                <Chip
                  className={clsx(
                    'text-unizenRegentGray',
                    'bg-unizenOxfordBlue',
                    'bg-opacity-10'
                  )}>
                  <div
                    className={clsx(
                      'divide-x',
                      'divide-unizenRegentGray',
                      'divide-opacity-30'
                    )}>
                    {item.claimTimings.map(claimTiming => (
                      <span
                        key={claimTiming}
                        className='px-1'>
                        {claimTiming}
                      </span>
                    ))}
                  </div>
                </Chip>
              </div>
            </ListItem>
          ))}
      </List>
    )
  }
];

// TODO: should componentize a bit more (once the backend has been confirmed)
const AllocationTabs = (): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
      <Tabs>
        {ALLOCATION_TAB_ITEMS.map((tabItem, index) => (
          <Tab
            key={tabItem.id}
            id={tabItem.id}
            selected={index === selectedIndex}
            onSelect={() => setSelectedIndex(index)}>
            {tabItem.label}
          </Tab>
        ))}
      </Tabs>
      {ALLOCATION_TAB_ITEMS.map((allocationTabItem, index) => (
        <TabPanel
          key={allocationTabItem.id}
          id={allocationTabItem.id}
          index={index}
          selectedIndex={selectedIndex}>
          {allocationTabItem.tabPanelContent}
        </TabPanel>
      ))}
    </>
  );
};

export default AllocationTabs;
