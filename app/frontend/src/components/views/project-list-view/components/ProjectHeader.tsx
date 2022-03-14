import styled from 'styled-components';
import Button from 'components/UI/button/Button';
import PageTitle from 'components/layouts/base/PageTitle';
import ProjectViewSwitcher from 'components/UI/project-view-switcher/ProjectViewSwitcher';
import { Project } from 'types/entities';

/**
 * Project header props model
 */
interface Props {
  /**
   * Selected project if exists
   */
  project?: Project | null

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
const ProjectHeader: React.FC<Props> = ({ className, project }: Props) => {
  const viewOptions = [
    {
      icon: 'list',
      url: `list`,
    },
    {
      icon: 'kanban',
      url: `board`,
    },
  ];

  return (
    <Container className={className}>
      <PageTitle>{project?.title || 'All projects'}</PageTitle>
      {!!project &&
        <Button>Project settings</Button>
      }
      {!!project &&
        <ProjectViewSwitcher items={viewOptions} />
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