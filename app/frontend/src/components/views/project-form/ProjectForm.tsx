import { useState } from 'react';
import styled from 'styled-components';
import PageTitle from 'components/layouts/base/PageTitle';
import Input from 'components/UI/input/Input';
import labeled from 'components/UI/labeled/Labeled';
import ImageUploaderForm from 'components/UI/image-uploader-form/ImageUploaderForm';
import Button, { StyleType } from 'components/UI/button/Button';
import { createProjectFx, updateProjectFx } from 'store/projects';
import { useParams } from 'react-router-dom';
import { $projects } from 'store/projects';
import { useStore } from 'effector-react';

/**
 * ProjectForm component props model
 */
interface Props { }

/**
 * ProjectForm component
 */
const ProjectForm: React.FC<Props> = () => {
  const params = useParams();
  const projects = useStore($projects);
  const currentProject = projects.find((project) => params.id === project._id);
  const projectFormTitle = `${currentProject?.title} Settings` || 'Add new project';

  const [title, setTitle] = useState(currentProject?.title || '');
  const [messengerChannelUrl, setMessengerChannelUrl] = useState(currentProject?.messengerChannelUrl || '');

  const submit = async (): Promise<void> => {
    if (currentProject) {
      await updateProjectFx({
        id: currentProject._id,
        title,
        messengerChannelUrl,
      });
    }
    else {
      await createProjectFx({
        title,
        messengerChannelUrl,
      });
    }
  };

  return (
    <div>
      <PageTitle>{ projectFormTitle }</PageTitle>
      <Wrapper>
        <LabeledInput
          label='Project title'
          placeholder='New project title'
          id='title'
          value={ title }
          onChange={ e =>  setTitle(e) } />
        <LabeledInput
          label='Messenger channel webhook'
          placeholder='Webhook URL'
          id='webhook-url'
          value={ messengerChannelUrl }
          onChange={ e =>  setMessengerChannelUrl(e) }>
            Read more about <a href="/">Working Channel</a> integrations
        </LabeledInput>
        <ImageUploaderForm
          label="Project picture"
          previewUrl={ '' }
          onChange={ e => console.log(e) }
          promptEmpty='Upload picture for your project'
          promptHasValue='Change picture for your project' />
        <Button styleType={ StyleType.Primary } onClick={ () => submit() }>
          { currentProject?.title?'Edit Project': 'Create project' }
        </Button>
      </Wrapper>
    </div>
  );
};

/**
 * Styled wrapper component
 */
const Wrapper = styled.div`
  width: 309px;
  margin-top: 16px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

/**
 * Input with label modifier applied
 */
const LabeledInput = labeled(Input);

export default ProjectForm;