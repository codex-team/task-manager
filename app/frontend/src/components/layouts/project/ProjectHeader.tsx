import styled from 'styled-components';
import Button from 'components/UI/button/Button';
import PageTitle from 'components/layouts/base/PageTitle';

/**
 * Project header props model
 */
interface Props {
  /**
   * Title of the project to be displayed
   */
  projectTitle: string
}

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

/**
 * Project header component
 *
 * @param props - props of the component
 */
const ProjectHeader: React.FC<Props> = (props) => {
  return (
    <Container>
      <PageTitle>{props.projectTitle}</PageTitle>
      <Button>Project settings</Button>
    </Container>
  );
};

export default ProjectHeader;