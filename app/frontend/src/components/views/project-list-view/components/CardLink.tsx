import styled from 'styled-components';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import Card, { Props as CardProps } from 'components/UI/card/Card';
import { ForwardedRef, forwardRef } from 'react';


export type CardLinkProps = {
  /**
   * Card forwarded ref
   */
  ref?: ForwardedRef<HTMLDivElement>

  /**
   * CSS class name
   */
  className?: string
};

/**
 * Link wrapper for card component.
 * Sets isActive state of the card based on current location
 *
 * @param props - props of the component
 */
const CardLink: React.FC<LinkProps & CardProps & CardLinkProps> = forwardRef<HTMLDivElement, LinkProps & CardProps>(({ children, to, projectInfo, taskTitle, status, showStatus, className, ...props }, ref) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div ref={ ref } className={ className }>
      <StyledLink
        to={ to }
        { ...props }
      >
        <Card projectInfo={ projectInfo } status={ status } taskTitle={ taskTitle } isActive={ !!match } showStatus={ showStatus }/>
      </StyledLink>
    </div>
  );
});

/**
 * Link component with overriden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
  display: block;
`;

export default CardLink;
