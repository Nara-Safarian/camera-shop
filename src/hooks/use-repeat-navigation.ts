import { RefObject, useEffect } from 'react';

type UseRepeatNavigationProps = {
  isActive: boolean;
  modalContainerRef: RefObject<HTMLElement>;
  firstElementRef: RefObject<HTMLElement>;
  lastElementRef: RefObject<HTMLElement>;
}

function useRepeatNavigation({isActive, modalContainerRef, firstElementRef, lastElementRef}: UseRepeatNavigationProps) {
  useEffect(() => {
    if (!isActive) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          // If Shift + Tab is pressed, focus the last element
          if (document.activeElement === firstElementRef.current) {
            e.preventDefault();
            if (lastElementRef.current) {
              lastElementRef.current.focus();
            }
          }
        } else {
          // If Tab is pressed, focus the first element
          if (document.activeElement === lastElementRef.current) {
            e.preventDefault();
            if (firstElementRef.current) {
              firstElementRef.current.focus();
            }
          }
        }
      }
    };

    setTimeout(() => {
      if (firstElementRef.current) {
        firstElementRef.current.focus();
      }
    }, 10);

    const modalContainer = modalContainerRef.current;
    if (modalContainer) {
      modalContainer.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (modalContainer) {
        modalContainer.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [isActive]);
}

export default useRepeatNavigation;
