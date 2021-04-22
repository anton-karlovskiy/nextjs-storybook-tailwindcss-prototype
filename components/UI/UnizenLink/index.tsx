
import clsx from 'clsx';

// ray test touch <
const UnizenLink = ({
  className,
  children,
  ...rest
}: React.ComponentPropsWithRef<'a'>): JSX.Element => (
  <a
    className={clsx(
      className
    )}
    {...rest}>
    {children}
  </a>
);
// ray test touch >

export default UnizenLink;
