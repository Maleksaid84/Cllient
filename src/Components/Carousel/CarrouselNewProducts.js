import React, { useEffect, useState, useRef } from 'react';
import './Carrousel.css';
import axios from 'axios';

const CarrouselNewProducts = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const [galleryItems, setGalleryItems] = useState([]);

const newCollectionsRef = useRef(null);

  useEffect(() => {
    
    axios.get('https://malek.onrender.com/newCollections')
    
      .then(response => {
      
        setGalleryItems(response.data.map(item => ({ id: item.id, src: item.image })));
      })
      .catch(error => {
        console.error('Error fetching images from MongoDB:', error);
      });

    
const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % galleryItems.length);
    }, 2000);

    
    return () => clearInterval(interval);
  }, [galleryItems.length]);

//Probleme
const scrollTonewCollections = () => {
    newCollectionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div className='gallery'>
    <div className='gallery-container'>

        {galleryItems.map((item, index) => (
          <img 
            key={item.id}
            className={`gallery-item ${currentIndex === index ? 'show' : ''}`}
            src={item.src}
            alt={`Product ${item.id}`}
            style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
          />
        ))}
      
           </div>

      <div className='gallery-controls'>
        <button onClick={() => setCurrentIndex(prevIndex => (prevIndex - 1 + galleryItems.length) % galleryItems.length)}>Previous</button>
        <button onClick={() => setCurrentIndex(prevIndex => (prevIndex + 1) % galleryItems.length)}>Next</button>
      </div>
    </div>
  );
}

export default CarrouselNewProducts;
