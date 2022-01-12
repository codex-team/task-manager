import styled from 'styled-components';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import Card, { Props as CardProps } from 'components/UI/card/Card';

/**
 * Link wrapper for card component.
 * Sets isActive state of the card based on current location
 *
 * @param props - props of the component
 */
const CardLink: React.FC<LinkProps & CardProps> = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div>
      <StyledLink
        to={ to }
        { ...props }
      >
        <Card projectInfo={props.projectInfo} status={props.status} taskTitle={props.taskTitle} isActive={!!match}/>
      </StyledLink>
    </div>
  );
};

/**
 * Link component with overriden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
`;

export default CardLink;
