import styled from 'styled-components';
import IconLink from './components/IconLink';

export interface SwitcherItem {
  /**
   * Item icon name
   */
  icon: string

  /**
   * Target url
   */
  url: string
}

/**
 * Props of the component
 */
interface Props {
  items: SwitcherItem[]
}
/**
 * Project view switcher component
 *
 * @param props - props of the component
 */
const ProjectViewSwitcher: React.FC<Props> = (props) => {
  return (
    <Container>
      { props.items.map(item => (
        <StyledIconLink name={ item.icon } to={ item.url } key={ item.url }/>
      ))}
    </Container>
  );
};


/**
 * Styled IconLink component
 */
const StyledIconLink = styled(IconLink)`
  &:not(:last-child) {
      margin-right: 22px;
    }
`;

/**
 * Styled container component
 */
const Container = styled.div`
  background: var(--color-gray-1);
  padding: 11px 20px;
  border-radius: 12px;
  max-width: fit-content;
  display: flex;
  align-items: center;
`;


export default ProjectViewSwitcher;
