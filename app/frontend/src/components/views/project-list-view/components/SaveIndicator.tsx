import React from 'react';
import styled, { css } from 'styled-components';

/**
 * Interface for indicator component props
 */
interface Props {
  /**
   * Is indicator visible
   */
  isVisible: boolean;
}

/**
 * Indicator component
 *
 * @param Props.isShow - isIndicator shows
 */
const SaveIndicator: React.FC<Props> = ({ isVisible }) => {
  return (
    <StyledIndicator isVisible={ isVisible }>
      Saved
    </StyledIndicator>
  );
};

/**
 * Indicator styled
 *
 * @param props - props for styled component
 */
const StyledIndicator = styled.div<Props>`
  opacity: 0;
${props => props.isVisible && css`
  opacity: 0.5;
  color: var(--color-text-secondary);
  margin-top: 0;
`}
`;

export default SaveIndicator;
