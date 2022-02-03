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
 * Indicator component
 *
 * @param Props.isShow - isIndicator shows
 */
const SaveIndicator: React.FC<Props> = ({ isShow }) => {
  return (
    <StyledIndicator isShow={ isShow }>
      Saved
    </StyledIndicator>
  );
};

/**
 * Indicator styled
 *
 * @param props
 */
const StyledIndicator = styled.div<Props>`
  opacity: 0;
${props => props.isShow && css`
  opacity: 1;
  color: var(--color-text-secondary);
  margin-top: 0;
`}
`;

export default SaveIndicator;
