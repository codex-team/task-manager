import { RefObject, useEffect } from 'react';

/**
 * Hook that calles callback function on clicks outside of the passed ref
 * src: https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 *
 * @param ref - ref of the component
 * @param callback - function that should be called on outside click
 */
export function useOutsideClickHandler<T extends HTMLElement>(ref: RefObject<T>, callback: () => void): void {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     *
     * @param event - mouse event
     */
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
}