import styled from 'styled-components';

/**
 * Page title props model
 */
interface Props {

}

/**
 * Styled page title component
 */
const StyledPageTitle = styled.h1`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  color: var(--color-text-dark)
`;

/**
 * Page title component
 *
 * @param props - props of the component
 */
const PageTitle: React.FC<Props> = (props) => {
  return (
    <StyledPageTitle>
      {props.children}
    </StyledPageTitle>
  );
};

export default PageTitle;