import React, { useState } from 'react';
import styled from 'styled-components';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import EditorJSComponent from 'components/UI/editor/EditorJSComponent';
import SaveIndicator from 'components/views/project-list-view/components/SaveIndicator';
import { debounce } from 'lodash';
import { updateTaskFx } from 'store/tasks';


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
 * @param Props.data - data for editor
 * @param Props.id - task id to change data
 */
const TaskContent: React.FC<Props> = ({ data, id }) => {
  const [isIndicatorVisible, setIsIndicatorVisible] = useState<boolean>(false);

  /**
   * Changes task data
   *
   * @param editor - editor js to get changed data
   */
  const changeTask = async (editor: EditorJS): Promise<void> => {
    const time = 500;
    const res = await editor.save();
    const text = JSON.stringify(res);

    try {
      const result = await updateTaskFx({
        _id: id,
        text: text,
      });

      if (result) {
        setIsIndicatorVisible(true);
        setTimeout(setIsIndicatorVisible.bind(false), time);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const timeForDebouncing = 1000;

  const debouncedChange = debounce(async (editor:EditorJS) => {
    changeTask(editor);
  }, timeForDebouncing);

  return (
    <TaskContentStyled>
      { data &&
        <EditorJSComponent data={ data } onDataChange={ debouncedChange }/>
      }
      <SaveIndicator isVisible={ isIndicatorVisible }/>
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
