import styled from 'styled-components';
import React, { useState } from 'react';
import labeled from '../../UI/labeled/Labeled';
import Input from '../../UI/input/Input';
import Button, { StyleType } from '../../UI/button/Button';
import { createTeammateFx } from 'store/teammates';
import ImageUploaderForm from '../../UI/image-uploader-form/ImageUploaderForm';

/**
 * TeammateForm component props model
 */
interface Props {
  /**
   * Teammate's workspace id
   */
  workspaceId: string;
}

/**
 * WorkspaceForm component
 *
 * @param props - props of component
 */
const TeammateForm: React.FC<Props> = (props) => {
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState('');
  const [contact, setContact] = useState('');

  const submit = async (): Promise<void> => {
    await createTeammateFx({
      workspaceId: props.workspaceId,
      name: username,
      photo: photo,
      contacts: [ {
        value: contact,
      } ],
    });
  };

  return (
    <Wrapper>
      <LabeledInput
        label="Name"
        placeholder="username"
        id="username"
        value={ username }
        onChange={ setUsername }
      />
      <LabeledInput
        label="Link"
        placeholder="link"
        id="link"
        value={ contact }
        onChange={ setContact }
      />
      <ImageUploaderForm
        label="Member's picture"
        previewUrl={ '' }
        onChange={ e => console.log(e) }
        promptEmpty='Upload picture for your member'
        promptHasValue='Change picture for your member' />
      <ButtonWrapper>
        <Button styleType={ StyleType.Secondary }>Cancel</Button>
        <Button styleType={ StyleType.Primary } onClick={ submit }>Add member</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

/**
 * Styled wrapper component
 */
const Wrapper = styled.div`
  width: 300px;
  margin-top: 20px;
  margin-bottom: 20px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

/**
 * Styled wrapper for button component
 */
const ButtonWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;

  & > * {
    width: 140px;
    justify-content: center;

  }
`;

/**
 * Input with label modifier applied
 */
const LabeledInput = labeled(Input);

export default TeammateForm;
