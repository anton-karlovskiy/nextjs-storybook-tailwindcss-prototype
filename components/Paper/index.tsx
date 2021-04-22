
import clsx from 'clsx';

const Paper = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'div'>): JSX.Element => (
  <div
    className={clsx(
      'bg-paper',
      'rounded-lg',
      'border',
      'border-solid',
      'border-unizenPorcelain',
      'p-2.5',
      className
    )}
    {...rest} />
);

export default Paper;
