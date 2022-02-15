import { useState } from 'react';
import styled from 'styled-components';
import PageTitle from 'components/layouts/base/PageTitle';
import Input from 'components/UI/input/Input';
import labeled from 'components/UI/labeled/Labeled';
import ImageUploaderForm from 'components/UI/image-uploader-form/ImageUploaderForm';
import Button, { StyleType } from 'components/UI/button/Button';
import { createProjectFx } from 'store/projects';

/**
 * ProjectForm component props model
 */
interface Props { }

/**
 * ProjectForm component
 */
const ProjectForm: React.FC<Props> = () => {
  const [title, setTitle] = useState('');
  const [messengerChannelUrl, setMessengerChannelUrl] = useState('');

  const submit = async (): Promise<void> => {
    await createProjectFx({
      title,
      messengerChannelUrl,
    });
  };

  return (
    <div>
      <PageTitle>Add new project</PageTitle>
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
        <Button styleType={ StyleType.Primary } onClick={ () => submit() }>Create project</Button>
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