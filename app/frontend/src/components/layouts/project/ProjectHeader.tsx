import styled from 'styled-components';
import Button from 'components/UI/button/Button';

/**
 * Project header props model
 */
interface Props {
  projectTitle: string
}

const Title = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  color: var(--color-text-dark)
`;

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
      <Title>{props.projectTitle}</Title>
      <Button>Project settings</Button>
    </Container>
  );
};

export default ProjectHeader;