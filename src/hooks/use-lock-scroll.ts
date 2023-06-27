import { useEffect } from 'react';

const useLockScroll = (isEnabled: boolean) => {
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (htmlElement) {
      if (isEnabled) {
        htmlElement.classList.add('scroll-lock');
      } else {
        htmlElement.classList.remove('scroll-lock');
      }
    }

    return () => {
      if (htmlElement) {
        htmlElement.classList.remove('scroll-lock');
      }
    };
  }, [isEnabled]);
};

export default useLockScroll;
