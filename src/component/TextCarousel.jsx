import React, { useEffect, useState } from 'react';
// import './TextCarousel.css';

const TextCarousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex, data]);

  return (
    <div className="text-carousel">
      {data.map((item, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
        >
        <div className='slider'>
          <h2>{item.header}</h2>
          <p>{item.paragraph}</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default TextCarousel;
