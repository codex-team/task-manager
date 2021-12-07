import styled from 'styled-components';

/**
 * Input component props model
 */
export interface Props {

  /**
   * Input element id
   */
  id: string

  /**
   * Input value
   */
  value: string,

  /**
   * Input placeholder
   */
  placeholder: string,

  /**
   * Input type
   */
  type: string,

  /**
   * True if input value is required
   */
  required: boolean,

  /**
   * True if input is disabled
   */
  disabled: boolean,

  /**
   * Value change callback
   */
  onChange: (val: string) => void
}

/**
 * Input wrapper component
 */
const InputWrapper = styled.div`
  width: 304px;
  height: 38px;
  border: 1px solid var(--color-gray-3);
  border-radius: 12px;
  display: flex;
  transition: border 0.15s;

  &:focus-within {
    border: 1px solid var(--color-gray-6);
  }
  
  input {
    flex: 1;
    padding-left: 12px;
    padding-right: 12px;
    outline: none;
    border: none;
    height: 100%;
    border-radius: 12px;
    color: var(--color-text-dark);
    font-size: 14px;
    letter-spacing: -0.005em;
    
    ::placeholder {
      color: var(--color-gray-5);
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
    <InputWrapper >
      <input
        id={ props.id }
        value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        disabled={props.disabled}
        onChange={({ target: { value } }) => props.onChange(value)}/>
    </InputWrapper>
  );
};

export default Input;