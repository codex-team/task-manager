import styled from 'styled-components';
import { useState } from 'react';
import PageTitle from '../../layouts/base/PageTitle';
import labeled from '../../UI/labeled/Labeled';
import Input from '../../UI/input/Input';
import Button, { StyleType } from '../../UI/button/Button';
import TeammateList from '../../UI/teammate-list/TeammateList';
import { UiComponentText } from 'styles/Mixins';
import { updateWorkspaceFx } from 'store/workspaces';
import TeammateForm from '../teammate-form/TeammateForm';

/**
 * WorkspaceForm component props model
 */
interface Props {
  /**
   * Workspace id
   */
  id: string;
  /**
   * Workspace name
   */
  name: string;
}

/**
 * WorkspaceForm component
 *
 * @param props - props of component
 */
const WorkspaceForm: React.FC<Props> = (props) => {
  const [name, setTitle] = useState(props.name);

  const handleNewTeamMember = (e: any):void => {
    console.log(e);
  };

  const submit = async (): Promise<void> => {
    await updateWorkspaceFx({
      _id: props.id,
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
        <LabelWrapper>
          <label>Team management</label>
          <Description>Current users in your team</Description>
        </LabelWrapper>
        <TeammateList>
          <StyledButton icon='plus' onClick={ handleNewTeamMember }>Add new team member</StyledButton>
          <TeammateForm workspaceId={ props.id } />
        </TeammateList>
        <Button styleType={ StyleType.Primary } onClick={ submit }>Update workspace</Button>
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
 * Styled wrapper for label component
 */
const LabelWrapper = styled.div`
  ${ UiComponentText };

  margin-bottom: 12px !important;

  label {
    color: var(--color-text-primary);
    font-weight: 600;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/**
 * Description component
 */
const Description = styled.p`
  color: var(--color-text-secondary);
  margin-top: 4px;
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
