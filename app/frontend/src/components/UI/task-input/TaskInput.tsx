import styled from 'styled-components';
import Input from 'components/UI/input/Input';
import Icon from 'components/UI/icon/Icon';
import React, { KeyboardEvent, useState } from 'react';

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

/**
 * Styled input component
 */
const StyledInput = styled(Input)`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  input {
    padding-left: 36px;
  }
`;

/**
 * Styled icon component
 */
const StyledIcon = styled(Icon)`
  position: relative;
  z-index: 1;
  margin-left: 12px;
  color: var(--color-text-secondary);

`;

/**
 * Styled wrapper for input
 *
 * @param props
 */
const Wrapper = styled.div<{ isFocused: boolean }>`
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;

${props => props.isFocused && `
  input {
    padding-left: 12px;
  }
`}


`;

/**
 * Component for creating nee tasks
 *
 * @param props - props of the component
 */
const TaskInput: React.FC<Props> = (props: Props) => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

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
    <Wrapper isFocused={ focused }>
      { !focused &&
        <StyledIcon name='plus' width={ 16 } height={ 16 }/>
      }
      <StyledInput
        value={text}
        onChange={ setText }
        placeholder={ props.placeholder }
        onKeyDown={ handleKeyDown }
        onFocus={ () => setFocused(true) }
        onBlur={ () => setFocused(false) }
      />
    </Wrapper>
  );
};

export default TaskInput;