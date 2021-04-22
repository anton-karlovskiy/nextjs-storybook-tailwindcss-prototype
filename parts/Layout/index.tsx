
import * as React from 'react';
import clsx from 'clsx';

import Sidebar from 'parts/Sidebar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({
  children
}: Props): JSX.Element => (
  <div
    className={clsx(
      'flex',
      'bg-default',
      'min-h-screen'
    )}>
    <Sidebar />
    <main
      className='flex-grow'>
      {children}
    </main>
  </div>
);

export default Layout;
