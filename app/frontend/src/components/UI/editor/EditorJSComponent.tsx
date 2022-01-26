import React from 'react';
import { EDITOR_JS_TOOLS } from 'tools';
import EditorJS from '@editorjs/editorjs';
import { OutputData } from '@editorjs/editorjs';

/**
 * Interface for editor js component props
 */
interface Props {
  data: OutputData | undefined;
}

/**
 * Editor js component
 *
 * @param data - data for editor
 */
const EditorJSComponent: React.FC<Props> = ({ data }) => {
  const editor = new EditorJS({
    holder: 'editorjs',
    tools: EDITOR_JS_TOOLS,
    data: data,
  });

  return (
    <div id={ 'editorjs' }/>
  );
};

export default EditorJSComponent;
