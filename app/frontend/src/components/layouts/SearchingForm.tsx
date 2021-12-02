import React from 'react';
import styled from 'styled-components';
import SidebarInput from "../UI/SearchingInput/SearchingInput";

/**
 * Interface for sidebar heading component props
 */
interface Props{
  placeholder: string;
  icon?: string
}

/**
 * Styled sidebar heading component
 *
 * @param props - props of component
 */
const SearchingFormStyled = styled.div<Props>`
  box-sizing: border-box;
  border-radius: 12px;
  display: inline-flex;
  padding: 5px 5px 5px 10px;
  width: 100%;
  border: 1px solid #EBEBEB;
  margin-top: 16px;
  height: 40px;
  &:hover {
    border-color: #8D8D8D;
    color: #EBEBEB;
  }

  &:focus-within{
    border-color: #1D2331;
  }
`;

/**
 * Sidebar heading component
 *
 * @param props - props of component
 */
const SearchingForm: React.FC<Props> = ({ ...props }) => {
  return (
    <SearchingFormStyled {...props}><SidebarInput placeholder={props.placeholder}/><img src={props.icon}/></SearchingFormStyled>
  );
};

export default SearchingForm;
