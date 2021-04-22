
import Collapse from 'rc-collapse';
import {
  CollapseProps,
  CollapsePanelProps
} from 'rc-collapse/lib/interface';
import {
  CSSMotionProps,
  MotionEventHandler,
  MotionEndEventHandler
} from 'rc-motion';
import clsx from 'clsx';

const getCollapsedHeight: MotionEventHandler = () => ({ height: 0, opacity: 0 });
const getRealHeight: MotionEventHandler = node => ({ height: node.scrollHeight, opacity: 1 });
const getCurrentHeight: MotionEventHandler = node => ({ height: node.offsetHeight });
const skipOpacityTransition: MotionEndEventHandler = (_, event) =>
  (event as TransitionEvent).propertyName === 'height';

const collapseMotion: CSSMotionProps = {
  motionName: 'rc-collapse-motion',
  onEnterStart: getCollapsedHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500,
  leavedClassName: 'rc-collapse-content-hidden'
};

interface AccordionPanelProps {
  children: React.ReactNode;
}

const AccordionPanel = ({
  headerClass,
  ...rest
}: AccordionPanelProps & CollapsePanelProps): JSX.Element => (
  <Collapse.Panel
    headerClass={clsx(
      'flex-row-reverse',
      'justify-between',
      headerClass
    )}
    {...rest} />
);

const Accordion = ({
  children,
  ...rest
}: AccordionProps & CollapseProps): JSX.Element => (
  <Collapse
    openMotion={collapseMotion}
    {...rest}>
    {children}
  </Collapse>
);

export interface AccordionProps {
  children: React.ReactNode;
}

export {
  AccordionPanel
};

export default Accordion;
