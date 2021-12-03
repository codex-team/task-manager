import styled from 'styled-components';

/**
 * Input component props model
 */
interface Props {

  /**
   * Input value
   */
  value: string,

  /**
   * Input label
   */
  label: string,

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
 * Root container component
 */
const Container = styled.div`
  width: 304px;
  
  label {
    color: var(--color-text-dark);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.005em;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

/**
 * Component to wrap input label and description
 */
const LabelAndDescriptionContainer = styled.div`
  margin-bottom: 12px;
`;

/**
 * Label wrapper component.
 * Allows to render astersisk for required state on the same line as label
 */
const LabelWrapper = styled.div`
  display: flex;
  font-size: 14px;
`;

/**
 * Input description component
 */
const Description = styled.p`
  font-size: 14px;
  color: var(--color-gray-5);
  margin-top: 4px;
`;

/**
 * Input component
 *
 * @param props - props of the component
 */
const Input: React.FC<Props> = (props) => {
  const hasLabelOrDescription = props.label || props.children;
  const renderLabel: React.FC | null = () => {
    if (!props.label) {
      return null;
    }

    return (
      <LabelWrapper>
        <label htmlFor="input">{props.label}</label>
        { props.required && <span>&nbsp;*</span> }
      </LabelWrapper>
    );
  };


  return (
    <Container>
      {
        hasLabelOrDescription &&
        <LabelAndDescriptionContainer>
          { renderLabel({}) }
          { props.children && <Description>{props.children}</Description> }
        </LabelAndDescriptionContainer>
      }
      <InputWrapper>
        <input
          id="input"
          value={props.value}
          type={props.type}
          placeholder={props.placeholder}
          required={props.required}
          disabled={props.disabled}
          onChange={({ target: { value } }) => props.onChange(value)}/>
      </InputWrapper>
    </Container>
  );
};

export default Input;