import React, { useState } from 'react';
import arrowLeft from '../../assets/flechegauche.png';
import arrowRight from '../../assets/flechedroite.png'; 


function Slideshow({ imageSlider }) {

  const [currentIndex, setCurrentIndex] = useState(0);

  const slideStyle = {
    backgroundImage: `url(${imageSlider[currentIndex]})`,
  };

  const next = () => {
    setCurrentIndex(currentIndex+1)
    if ( currentIndex === imageSlider.length -1)
    setCurrentIndex(0)
  }

  const prev = () => {
    setCurrentIndex(currentIndex-1)
    if ( currentIndex === 0)
    setCurrentIndex(imageSlider.length - 1)
  }

  

  return (
    <section style={slideStyle} className='slideshowStyle'>
      <div className='slideshowStyle_arrow'>
        {imageSlider.length > 1 && (
          <div className='slideshowStyle_arrow_column'>
            <img className='slideshowStyle_arrow_column_left' src={arrowLeft} alt='flechel' onClick={prev}/>
            <img className='slideshowStyle_arrow_column_right' src={arrowRight} alt='flecheD' onClick={next}/>
          </div>
        )}
        {imageSlider.length > 1 && (
          <p className='slideshowStyle_arrow_index'>{currentIndex + 1} / {imageSlider.length}</p>
        )}
      </div>
    </section>

  )
}

export default Slideshow;



// Composant slider => Initialiser avec useState à O 
// Iniatiliser les constantes ( fleches )
// picture.lenght => dans le premier cas c'est +1 , dans le deuxieme cas c'est -1
// Valeur de retour => Soit 0 ou la valeur de 1 ( suivant l'etat)

/*useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]) */