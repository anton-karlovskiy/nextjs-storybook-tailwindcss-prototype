
import clsx from 'clsx';

interface Props {
  className: string;
  label: string;
  children: React.ReactNode;
}

const RewardOrAllocationCard = ({
  className,
  label,
  children
}: Props): JSX.Element => (
  <div
    className={clsx(
      'space-y-2.5',
      'flex-1',
      'mx-3',
      className
    )}>
    <h5
      className={clsx(
        'text-sm',
        'font-medium'
      )}>
      {label}
    </h5>
    {children}
  </div>
);

export default RewardOrAllocationCard;
