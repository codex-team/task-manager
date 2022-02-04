import React, { useEffect } from 'react';
import {EDITOR_JS_TOOLS, EDITOR_JS_HOLDER_NAME} from 'tools';
import EditorJS from '@editorjs/editorjs';
import { OutputData } from '@editorjs/editorjs';


/**
 * Interface for editor js component props
 */
interface Props {
  /**
   * Data to show in editor
   */
  data: OutputData;

  /**
   * When data changes
   */
  onDataChange: (editor: EditorJS) => void;
}

/**
 * Editor js component
 *
 * @param Props.data - data for editor
 * @param Props.changeData - function for editor OnChange
 */
const EditorJSComponent: React.FC<Props> = ({ data, onDataChange }) => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: EDITOR_JS_HOLDER_NAME,
      tools: EDITOR_JS_TOOLS,
      data: data,
      onChange: () => {
        onDataChange(editor);
      },
    });
  }, [ data ]);

  return (
    <div id={ EDITOR_JS_HOLDER_NAME }/>
  );
};

export default EditorJSComponent;
