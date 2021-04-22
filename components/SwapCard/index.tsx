
import clsx from 'clsx';

const SwapCard = ({
  className,
  ...rest
}: Props): JSX.Element => {
  return (
    <div
      style={{
        width: 402
      }}
      className={clsx(
        'rounded-3xl',
        'p-5',
        'mx-auto',
        'bg-white',
        'bg-opacity-70',
        'shadow-md',
        'backdrop-filter',
        'backdrop-blur-3xl', // TODO: should be backdropFilter: 'blur(200px)'according to the design
        className
      )}
      {...rest} />
  );
};

export type Props = React.ComponentPropsWithRef<'div'>;

export default SwapCard;
