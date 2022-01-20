import React from 'react';

/**
 * Stops propagation
 *
 * @param e - mouse event
 */
export function stopPropagation(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void  {
  return e.stopPropagation();
}


/**
 * Makes string like dd.mm.yyyy from date
 *
 * @param dateToFormat - date for format to string
 *
 * @returns { string } - date to show
 */
export const formatDate = (dateToFormat: string): string => {
  return new Date(dateToFormat).toLocaleDateString();
};
