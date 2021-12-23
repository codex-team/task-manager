import { KeyboardEventHandler } from 'react';
import styled from 'styled-components';
import { UiComponentText } from 'styles/Mixins';

/**
 * Input component props model
 */
export interface Props {

  /**
   * Input element id
   */
  id?: string

  /**
   * Input value
   */
  value: string,

  /**
   * Input placeholder
   */
  placeholder?: string,

  /**
   * Input type
   */
  type?: string,

  /**
   * True if input value is required
   */
  required?: boolean,

  /**
   * True if input is disabled
   */
  disabled?: boolean,

  /**
   * Input name
   */
  name?: string,

  /**
   * Value change callback
   */
  onChange: (val: string) => void

  /**
   * CSS class name
   */
  className?: string

  /**
   * Keydown event handler
   */
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>

  /**
   * Focus event handler
   */
  onFocus?: () => void

  /**
   * Blur event handler
   */
  onBlur?: () => void
}

/**
 * Input wrapper component
 */
const InputWrapper = styled.div`
  height: 38px;
  border: 1px solid var(--color-line);
  border-radius: 12px;
  display: flex;
  transition: border 0.15s;

  &:hover {
    border: 1px solid var(--color-line-hover);
  }

  &:focus-within {
    border: 1px solid var(--color-line-active);
  }


  input {
    flex: 1;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: none;
    height: 100%;
    border-radius: 12px;
    color: var(--color-text-primary);
    ${ UiComponentText };
    
    ::placeholder {
      color: var(--color-text-secondary);
      opacity: 1;
    }
  }
`;

/**
 * Input component
 *
 * @param props - props of the component
 */
const Input: React.FC<Props> = (props) => {
  return (
    <InputWrapper className={ props.className }>
      <input
        id={ props.id }
        value={ props.value }
        type={ props.type }
        placeholder={ props.placeholder }
        required={ props.required }
        disabled={ props.disabled }
        name={ props.name }
        onChange={ ({ target: { value } }) => props.onChange(value) }
        onKeyDown={ props.onKeyDown }
        onFocus={ props.onFocus }
        onBlur={ props.onBlur } />
    </InputWrapper>
  );
};

export default Input;
