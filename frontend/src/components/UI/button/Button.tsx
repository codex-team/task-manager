import React from 'react';
import styled, { css } from 'styled-components';

export enum StyleTypes {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY'
}

export enum Sizes {
  LARGE = 'LARGE',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL'
}

/**
 * Interface for button's props
 */
interface Props extends Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'> {
  styleType?: StyleTypes;
  size?: Sizes;
}

/**
 * Styled button component
 *
 * @param props - props of component
 */
const ButtonStyled = styled.button<Props>`
  font-family: 'SF UI Display', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  line-height: 130%;
  border: 0;
  border-radius: 12px;
  cursor: pointer;
  display: inline-block;

  ${(props) => {
  switch (props.styleType) {
    case StyleTypes.PRIMARY:
      return css`
          background-color: #387CE1;
          color: #E9F2FF;

          &:hover {
            background-color: #2068D5;
          }

          &:active {
            background-color: #1B57B1;
          }
        `;
    case StyleTypes.SECONDARY:
    default:
      return css`
          color: #1D2331;
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

  ${(props) => {
  switch (props.size) {
    case Sizes.LARGE:
    default:
      return css`
          font-size: 14px;
          padding: 10px 20px;
        `;
  }
}};
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
