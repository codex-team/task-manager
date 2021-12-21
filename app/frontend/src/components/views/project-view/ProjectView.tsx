import ProjectHeader from './components/ProjectHeader';
import { useParams } from 'react-router-dom';

/**
 * Props of the component
 */
interface Props {

}

/**
 * ProjectView component
 */
const ProjectView: React.FC<Props> = () => {
  const params = useParams();
  const title = params.id ? 'Project title' : 'All projects';

  return (
    <div>
      <ProjectHeader title={title} />
    </div>
  );
};

export default ProjectView;