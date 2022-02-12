import styled from 'styled-components';
import { useState } from 'react';
import PageTitle from '../../layouts/base/PageTitle';
import labeled from '../../UI/labeled/Labeled';
import Input from '../../UI/input/Input';
import Button, { StyleType } from '../../UI/button/Button';
import { createProjectFx } from 'store/projects';
import TeammateList from '../../UI/teammate-list/TeammateList';
import { Link } from 'react-router-dom';
import { UiComponentText } from 'styles/Mixins';

/**
 * WorkspaceForm component props model
 */
interface Props { }

/**
 * WorkspaceForm component
 */
const WorkspaceForm: React.FC<Props> = () => {
  const [title, setTitle] = useState('');

  const submit = async (): Promise<void> => {
    await createProjectFx({
      title,
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
          value={ title }
          onChange={ e => setTitle(e) } />
        <LabelWrapper>
          <label>Team management</label>
          <Description>Current users in your team</Description>
        </LabelWrapper>
        <TeammateList>
          <StyledLink to=''>
            <StyledButton icon='plus'>Add new team member</StyledButton>
          </StyledLink>
        </TeammateList>
        <Button styleType={ StyleType.Primary } onClick={ () => submit() }>Update workspace</Button>
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
 * Link component with overridden styles
 */
const StyledLink = styled(Link)`
  text-decoration: unset;
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
