import React, { useEffect } from 'react';

const HorizontalScroll: React.FC = () => {
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        document.querySelector('.horizontal-container')!.scrollLeft += event.deltaY;
      }
    };

    const container = document.querySelector('.horizontal-container');
    container?.addEventListener('wheel', handleWheel);

    return () => container?.removeEventListener('wheel', handleWheel);
  }, []);

  return null;
};

export default HorizontalScroll;
