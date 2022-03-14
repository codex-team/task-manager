/**
 * Returns string containing task content in EditorJS format
 *
 * @param text - task title text
 */
export default function prepareTaskContent(text: string): string {
  const taskContent = {
    blocks: [
      {
        type: 'header',
        data: {
          text,
          level: 1,
        },
      },
    ],
  };

  return JSON.stringify(taskContent);
}