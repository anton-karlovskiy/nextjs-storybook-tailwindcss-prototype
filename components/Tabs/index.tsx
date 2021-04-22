
import clsx from 'clsx';

interface TabProps {
  selected: boolean;
  id: string;
  children: React.ReactNode;
  onSelect: () => void;
  listClassName?: string;
  anchorClassName?: string;
}

const Tab = ({
  selected,
  id,
  children,
  onSelect,
  listClassName,
  anchorClassName
}: TabProps): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onSelect();
  };

  return (
    <li
      className={clsx(
        'text-center',
        listClassName
      )}>
      <a
        className={clsx(
          'text-xs',
          'font-medium',
          'px-4',
          'py-2',
          'block',
          selected ?
            'text-unizenJava' :
            'text-textPrimary',
          'relative',
          {
            [[
              'after:absolute',
              'after:empty-content',
              'after:left-0',
              'after:w-full',
              'after:h-0.5',
              'after:bg-unizenJava',
              'after:-bottom-0.5',
              'after:z-10'
            ].join(' ')]: selected
          },
          'transition-all',
          'duration-300',
          'ease-in-out',
          anchorClassName
        )}
        href={`#${id}`}
        role='tablist'
        data-toggle='tab'
        onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

interface TabPanelProps {
  id: string;
  index: number;
  selectedIndex: number;
}

const TabPanel = ({
  id,
  index,
  selectedIndex,
  className,
  ...rest
}: TabPanelProps & React.ComponentPropsWithRef<'div'>): JSX.Element => (
  <div
    id={id}
    className={clsx(
      selectedIndex === index ? 'block' : 'hidden',
      className
    )}
    {...rest} />
);

const Tabs = ({
  className,
  ...rest
}: TabsProps): JSX.Element => {
  return (
    <ul
      className={clsx(
        'flex',
        'relative',
        'after:absolute',
        'after:empty-content',
        'after:left-0',
        'after:w-full',
        'after:h-0.5',
        'after:bg-unizenPorcelain',
        'after:-bottom-0.5',
        'z-0',
        className
      )}
      role='tablist'
      {...rest} />
  );
};

export type TabsProps = React.ComponentPropsWithRef<'ul'>;

export {
  Tab,
  TabPanel
};

export default Tabs;
