import styled, { css } from 'styled-components';
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
 * Component for creating new tasks
 *
 * @param props - props of the component
 */
const TaskInput: React.FC<Props> = ({ placeholder, onChange }: Props) => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key !== 'Enter' || !onChange) {
      return;
    }
    onChange(text);
    setText('');
  };

  const onFocus = (): void => {
    setFocused(true);
  };

  const onBlur = (): void => {
    setText('');
    setFocused(false);
  };

  return (
    <Wrapper isFocused={ focused }>
      { !focused &&
        <StyledIcon name='plus' width={ 16 } height={ 16 }/>
      }
      <StyledInput
        value={text}
        onChange={ setText }
        placeholder={ placeholder }
        onKeyDown={ handleKeyDown }
        onFocus={ onFocus }
        onBlur={ onBlur }
      />
    </Wrapper>
  );
};

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
    font-size: 16px;
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
 * @param props - props of the component
 */
const Wrapper = styled.div<{ isFocused: boolean }>`
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;

  ${props => props.isFocused && css`
    input {
      padding-left: 12px;
    }
  `}
`;

export default TaskInput;