
import clsx from 'clsx';

// ray test touch <
const UnizenInput = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'input'>): JSX.Element => (
  <input
    className={clsx(
      className
    )}
    {...rest} />
);
// ray test touch >

export default UnizenInput;
