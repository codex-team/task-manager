import React from 'react';
import styled from 'styled-components';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import EditorJSComponent from 'components/UI/editor/EditorJSComponent';
import { updateTask } from 'services/tasks';


/**
 * Interface for task content component props
 */
interface Props {
  data: OutputData | null;
  id: string;
}

/**
 * Task content component
 *
 * @param data - data for editor
 */
const TaskContent: React.FC<Props> = ({ data, id }) => {
  const changeTask = (editor: EditorJS): void => {
    editor.save().then(res => {
      const block = JSON.stringify(res);

      updateTask({ _id: id,
        text: block });
    });
  };

  return (
    <TaskContentStyled>
      { data &&
        <EditorJSComponent data={ data } changeData={ changeTask }/> }
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
