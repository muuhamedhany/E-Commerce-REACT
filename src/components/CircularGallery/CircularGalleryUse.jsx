import React from 'react';
import CircularGallery from './CircularGallery';

const CircularGalleryUse = () => {
  return (
    <div className="md:h-[600px] h-[500px] relative md:z-0 -z-1">
      <CircularGallery
        bend={0.5}
        textColor="#4b5b68"
        borderRadius={0.05}
        scrollEase={0.02}
      />
    </div>
  );
};

export default CircularGalleryUse;
