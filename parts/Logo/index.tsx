
import Link from 'next/link';
import clsx from 'clsx';

import Pro from './Pro';
import { PAGES } from 'utils/constants/links';
import TextLogoIcon from 'assets/icons/text-logo.svg';

const Logo = (): JSX.Element => (
  <Link href={PAGES.home}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a
      className={clsx(
        'space-x-1.5',
        'inline-flex'
      )}>
      <TextLogoIcon
        width={117}
        height={20} />
      <Pro />
    </a>
  </Link>
);

export default Logo;
