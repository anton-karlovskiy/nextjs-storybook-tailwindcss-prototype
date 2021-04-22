
import Link from 'next/link';
import clsx from 'clsx';

import UnizenButton from 'components/UI/UnizenButton';
import { PAGES } from 'utils/constants/links';
import { LAYOUT } from 'styles/constants';
import DashboardIcon from 'assets/icons/dashboard.svg';
import TradeIcon from 'assets/icons/trade.svg';
import ModulesIcon from 'assets/icons/modules.svg';

const NAVIGATION_ITEMS = [
  {
    title: 'Dashboard',
    icon: <DashboardIcon />,
    href: PAGES.dashboard
  },
  {
    title: 'Trade',
    icon: <TradeIcon />,
    href: PAGES.trade
  },
  {
    title: 'Modules',
    icon: <ModulesIcon />,
    href: PAGES.modules
  }
];

const Sidebar = (): JSX.Element => (
  <div
    style={{
      width: LAYOUT.sidebarWidth
    }}
    className='flex-shrink-0'>
    <ul
      style={{
        width: LAYOUT.sidebarWidth
      }}
      className={clsx(
        'fixed',
        'top-0',
        'left-0',
        'h-full',
        'z-unizenDrawer',
        'overflow-y-auto',
        'bg-paper',
        'bg-opacity-50',
        'backdrop-filter',
        'backdrop-blur-3xl',
        'flex',
        'flex-col',
        'p-3.5',
        'space-y-1',
        'border-r',
        'border-solid',
        'border-unizenPorcelain'
      )}>
      {NAVIGATION_ITEMS.map(navigationItem => (
        <li key={navigationItem.title}>
          <Link href={navigationItem.href}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <UnizenButton
                className={clsx(
                  'w-full',
                  'rounded-2xl'
                )}
                variant='text'
                color='default'>
                <div
                  className={clsx(
                    'flex',
                    'flex-col',
                    'items-center',
                    'space-y-2'
                  )}>
                  {navigationItem.icon}
                  <span className='text-xs-unizen'>
                    {navigationItem.title}
                  </span>
                </div>
              </UnizenButton>
            </a>
          </Link>
        </li>
      ))}
      <li className='flex-grow' />
      <li>
        <UnizenButton color='secondary'>mode</UnizenButton>
      </li>
    </ul>
  </div>
);

export default Sidebar;
