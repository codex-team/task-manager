import styled from 'styled-components';
import Input from 'components/UI/input/Input';
import { KeyboardEvent, useState } from 'react';

/**
 * Component props model
 */
interface Props {

  /**
   * Task input placeholder
   */
  placeholder?: string,

  /**
   * Value change callback
   */
  onChange: (val: string) => void
}

const StyledInput = styled(Input)`
  height: 48px;
`;

/**
 * Component for creating nee tasks
 *
 * @param props - props of the component
 */
const TaskInput: React.FC<Props> = (props: Props) => {
  const [text, setText] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter' || !props.onChange) {
      return;
    }
    const value = {
      blocks : [
        {
          type: 'paragraph',
          data: {
            text,
          },
        },
      ],
    };

    props.onChange(JSON.stringify(value));
    setText('');
  };

  return (
    <StyledInput
      value={text}
      onChange={ setText }
      placeholder={ props.placeholder }
      onKeyDown={ handleKeyDown }
    />
  );
};

export default TaskInput;