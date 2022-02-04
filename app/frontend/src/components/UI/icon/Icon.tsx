import React from 'react';
import { viewBoxes } from 'components/UI/sprite/Sprite';

/**
 * Icon component props
 */
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * Name of the file containing svg icon
   */
  name: string;

  /**
   * CSS class name
   */
  className?: string
}

/**
 * Component that allows to dynamically import icons by name
 *
 * @param props - props of the component
 */
const Icon: React.FC<IconProps> = ({ name, ...rest }): JSX.Element | null => (
  <svg { ...rest } preserveAspectRatio="xMidYMid meet" viewBox={ viewBoxes.get(name) }>
    <use xlinkHref={ `#sprite-${name}` } />
  </svg>
);

export default Icon;
