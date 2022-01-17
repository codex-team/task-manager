import styled from 'styled-components';
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom';
import ProjectListItem, { Props as ProjectListItemProps } from 'components/UI/project-list/ProjectListItem';

/**
 * Link wrapper for project list item component.
 * Sets isActive state of the project list item based on current location
 *
 * @param props - props of the component
 */
const ProjectLink: React.FC<LinkProps & ProjectListItemProps> = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({
    path: resolved.pathname,
    end: true,
  });

  return (
    <div>
      <StyledLink
        to={to}
        {...props}
      >
        <ProjectListItem title={props.title} picture={props.picture} isActive={!!match}/>
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

export default ProjectLink;