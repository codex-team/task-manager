import React from 'react';
import styled from 'styled-components';
import Editor from '@stfy/react-editor.js';
import { EDITOR_JS_TOOLS } from 'tools';
import { OutputData } from '@editorjs/editorjs';

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
        <Editor data={ data } tools={ EDITOR_JS_TOOLS }/> }
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
