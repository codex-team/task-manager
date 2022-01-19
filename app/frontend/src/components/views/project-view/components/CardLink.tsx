import styled from 'styled-components';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import Card, { Props as CardProps } from 'components/UI/card/Card';
import { ForwardedRef, forwardRef } from 'react';

/**
 * Type for card forwarded ref
 */
export type CardRefType = {
  ref: ForwardedRef<HTMLDivElement>
};

/**
 * Link wrapper for card component.
 * Sets isActive state of the card based on current location
 *
 * @param props - props of the component
 */
const CardLink: React.FC<LinkProps & CardProps & CardRefType> = forwardRef<HTMLDivElement, LinkProps & CardProps>(({ children, to, projectInfo, taskTitle, status, ...props }, ref) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div ref={ref}>
      <StyledLink
        to={ to }
        { ...props }
      >
        <Card projectInfo={projectInfo} status={status} taskTitle={taskTitle} isActive={!!match} />
      </StyledLink>
    </div>
  );
});

/**
 * Link component with overriden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
`;

export default CardLink;
