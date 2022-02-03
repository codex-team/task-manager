import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Interface for indicator component props
 */
interface Props {
  /**
   * Is indicator shows
   */
  isShow: boolean;
}

/**
 * Editor js component
 *
 * @param Props.data - data for editor
 * @param Props.changeData - function for editor OnChange
 */
const SaveIndicator: React.FC<Props> = ({ isShow }) => {
  return (
    <StyledIndicator isShow={ isShow }>
      Saved
    </StyledIndicator>
  );
};

const StyledIndicator = styled.div<Props>`
  opacity: 0;
${props => props.isShow && css`
  opacity: 1;
  color: var(--color-text-secondary);
  margin-top: 0;
`}
`;

export default SaveIndicator;
