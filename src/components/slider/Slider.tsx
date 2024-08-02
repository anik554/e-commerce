import React, { useEffect, useState } from 'react';


interface ImageType{
  images: {src: string; text:string}[];
  autoplayInterval?: number;
}

const Slider: React.FC<ImageType> = ({images, autoplayInterval = 3000}) => {
  const [currentIndex, setCurrentIndex]= useState(0);

  const prevSlide = ()=>{
    setCurrentIndex((prevIndex)=>
      prevIndex === 0 ? images.length -1 : prevIndex -1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoplayInterval);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, autoplayInterval]);

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide} disabled={currentIndex === 0}>
        &#10094;
      </button>
      <div className="carousel-images">
        <img src={images[currentIndex].src} alt="carousel" className="carousel-image" />
        <div className="carousel-text-overlay">
          {images[currentIndex].text}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;