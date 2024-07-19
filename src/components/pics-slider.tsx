import React from 'react';
import { ImagesSlider } from './ui/images-slider';

export const PicsSlider = () => {
  return (
    <ImagesSlider
      images={[
        'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      ]}
      autoplay
    >
      <div className="w-full h-2/3">Images Slider</div>
    </ImagesSlider>
  );
};
