import React from 'react';
import styled from 'styled-components';
import { OutputData } from '@editorjs/editorjs';
import EditorJSComponent from 'components/UI/editor/EditorJSComponent';

/**
 * Interface for task content component props
 */
interface Props {
  data: OutputData | null;
}

/**
 * Task content component
 *
 * @param data - data for editor
 */
const TaskContent: React.FC<Props> = ({ data }) => {
  return (
    <TaskContentStyled>
      { data &&
        <EditorJSComponent data={ data } /> }
    </TaskContentStyled>
  );
};


/**
 * Content styled
 */
const TaskContentStyled = styled.div`
  width: 650px;
`;

export default TaskContent;
