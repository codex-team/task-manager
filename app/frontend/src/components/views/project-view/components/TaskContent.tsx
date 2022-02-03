import React, { useState } from 'react';
import styled from 'styled-components';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import EditorJSComponent from 'components/UI/editor/EditorJSComponent';
import { updateTask } from 'services/tasks';
import SaveIndicator from 'components/views/project-view/components/SaveIndicator';
import { throttle } from 'lodash';


/**
 * Interface for task content component props
 */
interface Props {
  /**
   * Task data to show
   */
  data: OutputData | null;

  /**
   * Task id to change
   */
  id: string;
}

/**
 * Task content component
 *
 * @param data - data for editor
 */
const TaskContent: React.FC<Props> = ({ data, id }) => {
  const [isShow, setIsShow] = useState<boolean>(false);

  const changeTask = async (editor: EditorJS): Promise<void> => {
    const time = 500;
    const res = await editor.save();
    const block = JSON.stringify(res);

    try {
      const result = await updateTask({ _id: id,
        text: block });

      if (result) {
        setIsShow(true);
        setTimeout(setIsShow.bind(false), time);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const time = 5000;

  const throttledChange = throttle(async (editor:EditorJS) => {
    changeTask(editor);
  }, time);

  return (
    <TaskContentStyled>
      { data &&
        <EditorJSComponent data={ data } onDataChange={ throttledChange }/> }
      <SaveIndicator isShow={ isShow }/>
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
