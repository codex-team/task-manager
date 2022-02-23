import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../layouts/base/PageTitle';
import labeled from '../../UI/labeled/Labeled';
import Input from '../../UI/input/Input';
import Button, { StyleType } from '../../UI/button/Button';
import TeammateList from '../../UI/teammate-list/TeammateList';
import { $workspace, getWorkspaceFx, updateWorkspaceFx } from 'store/workspaces';
import TeammateForm from '../teammate-form/TeammateForm';
import { useStore } from 'effector-react';

/**
 * WorkspaceForm component props model
 */
interface Props {}

const WorkspaceForm: React.FC<Props> = () => {
  const workspace = useStore($workspace);
  const [name, setTitle] = useState(workspace.name);
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const [teammateList, setTeammateList] = useState(<TeammateList workspaceId={ workspace._id } />);

  useEffect(() => {
    getWorkspaceFx({});
    setTeammateList(<TeammateList workspaceId={ workspace._id } />);
  }, [ workspace._id ]);

  const handleNewMemberForm = (): void => {
    setIsFormDisplayed(current => !current);
  };

  const handleCancel = (): void => {
    setIsFormDisplayed(false);
  };

  const submit = async (): Promise<void> => {
    await updateWorkspaceFx({
      _id: workspace._id,
      name: name,
    });
  };

  return (
    <div>
      <PageTitle>Workspace settings</PageTitle>
      <Wrapper>
        <LabeledInput
          label='Workspace'
          placeholder='Workspace title'
          id='title'
          value={ name }
          onChange={ setTitle }
        />
        { teammateList }
        { !isFormDisplayed &&
          <StyledButton icon='plus' onClick={ handleNewMemberForm }>Add new team member</StyledButton>
        }
        { !isFormDisplayed &&
          <Button styleType={ StyleType.Primary } onClick={ submit }>Update workspace</Button>
        }
        { isFormDisplayed &&
          <TeammateForm workspaceId={ workspace._id } handleCancel={ handleCancel }/>
        }
      </Wrapper>
    </div>
  );
};

/**
 * Styled wrapper component
 */
const Wrapper = styled.div`
  width: 300px;
  margin-top: 16px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

/**
 * Button component which takes full width
 */
const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 23px;
  padding: 11px 14px;

  svg {
    margin-right: 8px;
  }
`;

/**
 * Input with label modifier applied
 */
const LabeledInput = labeled(Input);

export default WorkspaceForm;
