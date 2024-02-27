import React from 'react';
import { useState } from 'react';

const Question5 = ({images}) => {
    //state to manage the index of the current image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    //function to handle previous button click
    const goToPreviousImage = () =>{
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length -1 : prevIndex -1 ));
    }

        //function to handle next button click
        const goToNextImage = () =>{
            setCurrentImageIndex(prevIndex =>(prevIndex === images.length -1 ? 0 : prevIndex + 1));
        }
    
  return (
    <div>
        <h2>Image Gallery</h2>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button onClick={goToPreviousImage}>Previous</button>
            <img src={images[currentImageIndex]}alt={`Image ${currentImageIndex + 1}`} style={{ maxWidth: '400px', maxHeight: '400px', margin: '0 10px' }} />
             <button onClick={goToNextImage}>Next</button>
             </div>
             <p style={{ textAlign: 'center' }}>{currentImageIndex + 1} of {images.length}</p>
           </div>

    

  )
}

export default Question5