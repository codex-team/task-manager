import Input from 'components/UI/input/Input';
import { Props as InputProps } from 'components/UI/input/Input';
import styled from 'styled-components';


interface Props extends InputProps{
  /**
   * Input element id
   */
  id: string

  /**
   * Input label
   */
  label: string,
}

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

  p {
    margin-bottom: 12px;
  }
`;

/**
 * Label wrapper component.
 * Allows to render astersisk for required state on the same line as label
 *
 * @param props - props of the component
 */
const LabelWrapper = styled.div<{ hasDescription: boolean }>`
  display: flex;
  font-size: 14px;
  font-weight: 600;

  ${props => !props.hasDescription && `
    margin-bottom: 12px
  `}
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
 * LabeledInput component
 *
 * @param props props of the component
 */
const LabeledInput: React.FC<Props> = (props) => {
  const renderLabel: React.FC | null = () => {
    if (!props.label) {
      return null;
    }

    return (
      <LabelWrapper hasDescription={ !!props.children }>
        <label htmlFor={ props.id } >{ props.label }</label>
        { props.required && <span>&nbsp;*</span> }
      </LabelWrapper>
    );
  };

  return (
    <Container>
      { renderLabel({}) }
      { props.children && <Description>{ props.children }</Description> }
      <Input { ...props }/>
    </Container>

  );
};

export default LabeledInput;