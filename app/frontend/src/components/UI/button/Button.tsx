import React from 'react';
import styled, { css } from 'styled-components';

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
  display: inline-block;

  ${(props) => {
    switch (props.styleType) {
      case StyleType.Primary:
        return css`
          background-color: #387CE1;
          color: var(--color-text-light);

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
          color: var(--color-text-dark);
          background-color: #F4F4F4;

          &:hover {
            background-color: #EBEBEB;
          }

          &:active {
            background-color: #D6D6D6;
          }
        `;
    }
  }};};
`;

/**
 * Button component
 *
 * @param props - props of component
 */
const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <ButtonStyled {...props}/>
  );
};

export default Button;
