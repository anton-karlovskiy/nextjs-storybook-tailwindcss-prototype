
import clsx from 'clsx';

import Logo from 'parts/Logo';
import { LAYOUT } from 'styles/constants';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const MainLeftPanel = ({
  className,
  children
}: Props): JSX.Element => (
  <div
    style={{
      width: LAYOUT.mainLeftPanelWidth
    }}
    className='flex-shrink-0'>
    <div
      style={{
        width: LAYOUT.mainLeftPanelWidth,
        left: LAYOUT.sidebarWidth
      }}
      className={clsx(
        'fixed',
        'top-0',
        'h-full',
        'z-unizenDrawer',
        'overflow-y-auto',
        'bg-unizenAlabaster',
        'px-5',
        'py-7',
        'border-r',
        'border-solid',
        'border-unizenPorcelain',
        className
      )}>
      <Logo />
      {children}
    </div>
  </div>
);

export default MainLeftPanel;
