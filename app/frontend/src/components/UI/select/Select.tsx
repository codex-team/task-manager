import styled, { css } from 'styled-components';
import { UiComponentText } from 'styles/Mixins';
import Icon from 'components/UI/icon/Icon';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import Dropdown from 'components/UI/dropdown/Dropdown';
import { DropdownItem } from 'components/UI/dropdown/DropdownItem';
import { useOutsideClickHandler } from 'helpers/outside-click';
import { values } from 'lodash';

/**
 * Props of the component
 */
interface Props {
  /**
   * Selected value
   */
  value?: number|string|null

  /**
   * Value change callback
   */
  onChange: (value: number|string|null|undefined) => void

  /**
   * Select placeholder
   */
  placeholder?: string

  /**
   * Select options
   */
  options: DropdownItem[]

  /**
   * Label and other data for initially selected value
   */
  initialOption?: DropdownItem
}

/**
 * Select component
 *
 * @param props - props of the component
 */
const Select: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState(-1);
  const [selectedOption, setSelectedOption] = useState<DropdownItem|undefined>();
  const ref = useRef(null);

  useEffect(() => {
    setSelectedOption(props.initialOption);
  }, [ props.initialOption ]);

  useEffect(() => {
    setSelectedOption(props.options.find(option => option.value === props.value));
  }, [ props.value ]);

  useOutsideClickHandler(ref, () => {
    close();
  });

  const selectOption = (option: DropdownItem): void => {
    props.onChange(option.value);
    setSelectedOption(option);
    close();
  };

  const open = (): void => {
    setIsOpen(true);
  };

  const close = (): void => {
    setIsOpen(false);
  };


  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  const onKeyDown = (e: KeyboardEvent): void => {
    if (isOpen) {
      switch (e.code) {
        case 'Escape':
          close();
          break;
        case 'ArrowDown':
          if (focusedOptionIndex < props.options.length - 1) {
            setFocusedOptionIndex(focusedOptionIndex + 1);
          } else {
            setFocusedOptionIndex(0);
          }
          break;
        case 'ArrowUp':
          if (focusedOptionIndex > 0) {
            setFocusedOptionIndex(focusedOptionIndex - 1);
          } else {
            setFocusedOptionIndex(props.options.length - 1);
          }
          break;
        case 'Enter':
        case 'Space':
          selectOption(props.options[focusedOptionIndex]);
          setFocusedOptionIndex(-1);
          break;
      }
    } else {
      if (e.code === 'Enter' || e.code === 'Space') {
        open();
      }
    }
  };

  return (
    <Wrapper tabIndex={ 0 } isOpen={ isOpen } onClick={ toggle } onBlur={ close } onKeyDown={ onKeyDown } ref={ ref }>
      { !selectedOption &&
        <span>{ props.placeholder }</span>
      }
      <span>{ selectedOption?.label }</span>
      <StyledIcon name='arrow_down' width={ 24 } height={ 24 } />
      { isOpen &&
        <StyledDropdown
          items={ props.options }
          focusedIndex={ focusedOptionIndex }
          onSelect={ selectOption }
          selectedValue={ props.value }
        />
      }
    </Wrapper>
  );
};

/**
 * Select wrapper component
 *
 * @param props - props of the component
 */
const Wrapper = styled.div<{ isOpen: boolean}>`
  height: 38px;
  border: 1px solid var(--color-line);
  border-radius: 12px;
  transition: all 0.15s;
  padding: 10px 12px 10px 12px;
  display: flex;
  align-items: center;
  line-height: 16px;
  color: var(--color-text-secondary);
  outline: none;
  position: relative;
  cursor: pointer;

  ${ UiComponentText };

  &:hover {
    border: 1px solid var(--color-line-hover);
  }

  &:focus-within {
    border: 1px solid var(--color-line-active);
    color: var(--color-text-primary);
  }

  ${props => props.isOpen && css`
    ${StyledIcon} {
      transform: rotate(180deg);
    }
  `}
`;

/**
 * Styled icon component
 */
const StyledIcon = styled(Icon)`
  margin-left: auto;
`;

/**
 * Styled dropdown component
 */
const StyledDropdown = styled(Dropdown)`
  position: absolute;
  top: 120%;
  left: 0;
  width: 100%;
`;


export default Select;
