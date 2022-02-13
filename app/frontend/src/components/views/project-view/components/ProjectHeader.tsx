import styled from 'styled-components';
import Button from 'components/UI/button/Button';
import PageTitle from 'components/layouts/base/PageTitle';
import { Link } from 'react-router-dom';

/**
 * Link component with overriden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
`;

/**
 * Project header props model
 */
interface Props {
  /**
   * Title of the project to be displayed
   */
  title: string

  /**
   * True if project header should contain settings button
   */
  hasSettingsButton?: boolean

  /**
   * Link of the project settings page.
   */
  to?: string

  /**
   * CSS class name
   */
  className?: string
}

/**
 * Project header component
 *
 * @param props - props of the component
 */
const ProjectHeader: React.FC<Props> = ({ className, title, hasSettingsButton, to }: Props) => {
  return (
    <Container className={ className }>
      <PageTitle>{ title }</PageTitle>
      { hasSettingsButton &&
        <StyledLink to={ to ?? `/` }>
          <Button>Project settings</Button>
        </StyledLink>
      }
    </Container>
  );
};

/**
 * Styled container component
 */
const Container = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 24px
  }
`;

export default ProjectHeader;