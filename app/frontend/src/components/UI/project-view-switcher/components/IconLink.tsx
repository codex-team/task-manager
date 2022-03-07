import styled, { css } from 'styled-components';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import Icon, { IconProps } from 'components/UI/icon/Icon';


interface Props {
  /**
   * Icon name
   */
  name: string
}

/**
 * Link wrapper for icon component.
 *
 * @param props - props of the component
 */
const IconLink: React.FC<LinkProps & Props> = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: false,
  });

  return (
    <Link
      to={ to }
      { ...props }
    >
      <StyledIcon name={ props.name } width={ 16 } height={ 16 } $isActive={ !!match }/>
    </Link>
  );
};

/**
 * Styled icon component
 *
 * @param props - props of the component
 */
const StyledIcon = styled<React.FC<IconProps & { $isActive: boolean }>>(Icon)`
  color: var( --color-contrast);
  display: block;

  ${props => props.$isActive && css`
    color: var( --color-accent);
  `}
`;

export default IconLink;
