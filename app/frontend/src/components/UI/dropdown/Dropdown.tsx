import { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { UiComponentText } from 'styles/Mixins';
import { DropdownItem as DropdownItemType } from './DropdownItem';

/**
 * Props of the component
 */
interface Props {
  /**
   * Items to be displayed inside of dropdown
   */
  items: DropdownItemType[]

  /**
   * Value of selected item
   */
  selectedValue?: number|string

  /**
   * Index of item to be highlighted
   */
  focusedIndex?: number

  /**
   * CSS class name
   */
  className?: string

  /**
   * Item select handler
   */
  onSelect?: (item: DropdownItemType) => void
}
const Dropdown: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper className={ props.className }>
      { props.items.map((item, i) => (
        <DropdownItem
          key={ item.value }
          isSelected={ props.selectedValue === item.value }
          isHighlighted={ props.focusedIndex === i }
          onClick={ () => props.onSelect && props.onSelect(item) }
        >
          { item.label }
        </DropdownItem>
      ))}
    </Wrapper>
  );
};

/**
 * Wrapper styled component
 */
const Wrapper = styled.ul`
  border: 1px solid var(--color-line);
  border-radius: 12px;
  padding: 5px;
`;

/**
 * Dropdown item component
 *
 * @param props - props of the component
 */
const DropdownItem = styled.li<{ isSelected?: boolean, isHighlighted?: boolean, onClick?: MouseEventHandler<HTMLLIElement> }>`
  display: flex;
  padding: 10px 12px 10px 12px;
  border-radius: 12px;
  cursor: pointer;
  ${ UiComponentText };

  ${props => props.isHighlighted && css`
    background: var(--color-bg-hover);
  `}

  ${props => props.isSelected && css`
    background: var(--color-contrast);
    color: var(--color-text-primary-reversed);
  `}

  ${props => !props.isSelected && css`
    &:hover {
      background: var(--color-bg-hover);
    }
  `}
`;

export default Dropdown;