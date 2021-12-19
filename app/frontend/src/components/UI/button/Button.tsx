import React from 'react';
import styled, { css } from 'styled-components';
import Icon from 'components/UI/icon/Icon';

/**
 * Types of button style
 */
export enum StyleType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

/**
 * Interface for button's props
 */
interface Props extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
  /**
   * Button style type
   */
  styleType?: StyleType;

  /**
   * Icon name to be displayed inside of the button
   */
  icon?: string
}

/**
 * Styled button component
 *
 * @param props - props of component
 */
const ButtonStyled = styled.button<Props>`
  font-size: 14px;
  padding: 10px 20px;
  font-weight: 500;
  line-height: 130%;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: flex;

  ${(props) => {
    switch (props.styleType) {
      case StyleType.Primary:
        return css`
          background-color: var(--color-accent);
          color: var(--color-text-primary-reversed);

          &:hover {
            background-color: #2068D5;
          }

          &:active {
            background-color: #1B57B1;
          }
        `;
      case StyleType.Secondary:
      default:
        return css`
          color: var(--color-text-primary);
          background-color: #F4F4F4;

          &:hover {
            background-color: #EBEBEB;
          }

          &:active {
            background-color: #D6D6D6;
          }
        `;
    }
  }};

  ${props => props.icon && `
    padding-left: 16px;

    svg {
      display: inline-block;
      margin-right: 10px;
    }
  `}
`;

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonStyled {...props}>
      { props.icon &&
          <Icon name='plus' width={16} height={16}/>
      }
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
