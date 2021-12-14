import { ComponentType, ReactNode } from 'react';
import styled from 'styled-components';

/**
 * Labeled wrapper props model
 */
interface AdditionalProps {
  /**
   * Id to be passed to label
   */
  id: string

  /**
   * Label text
   */
  label: string

  /**
   * True if should display required asterisk
   */
  required: boolean
}

/**
 * Root container component
 */
const Container = styled.div`
  label {
    color: var(--color-text-primary);
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.005em;
    display: inline-block;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > p {
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
 *  Description component
 */
const Description = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-top: 4px;
`;

/**
 * Component props model
 */
type PropsWithChildren<P> = P  &  { children?: ReactNode };

/**
 * Adds label and description to specified component
 *
 * @param Component - component to be wrapped
 */
function labeled<P>(Component: ComponentType<PropsWithChildren<P>>): React.FC<P & AdditionalProps> {
  return (props: PropsWithChildren<P & AdditionalProps>) => (
    <Container>
      { props.label &&
        <LabelWrapper hasDescription={ !!props.children }>
          <label htmlFor={ props.id }> { props.label } </label>
          { props.required && <span> &nbsp;* </span> }
        </LabelWrapper>
      }
      { props.children && <Description> { props.children } </Description> }
      <Component { ...props as P } />
    </Container>
  );
}


export default labeled;
