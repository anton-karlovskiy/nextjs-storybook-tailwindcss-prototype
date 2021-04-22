
import clsx from 'clsx';

// TODO: could use https://github.com/react-component/slider
const RangeSlider = ({
  className,
  ...rest
}: React.ComponentPropsWithRef<'input'>): JSX.Element => (
  <input
    className={clsx(
      'w-full',
      className
    )}
    type='range'
    min='0'
    max='2434'
    defaultValue='312.34'
    {...rest} />
);

export default RangeSlider;
