
import clsx from 'clsx';

const Chip = ({
  children,
  className
}: Props): JSX.Element => (
  <div
    className={clsx(
      'inline-flex',
      'justify-center',
      'items-center',
      'text-xs-unizen',
      'font-semibold',
      'rounded',
      className
    )}>
    <span
      className={clsx(
        'whitespace-nowrap',
        'px-1',
        'py-0.5'
      )}>
      {children}
    </span>
  </div>
);

export interface Props {
  children: React.ReactNode;
  className: string;
}

export default Chip;
