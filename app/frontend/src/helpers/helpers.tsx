import React from 'react';

/**
 * Stops propagation
 *
 * @param e - mouse event
 */
export function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void  {
  return e.stopPropagation();
}
