import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Banner() {

  // State ( etat, données)
  const [aboutPage, setAboutPage] = useState(false);
  

  const location = useLocation();
  console.log(location);

  // Comportements

  useEffect(() => {
    if(location.pathname === '/about'){
      setAboutPage(true)
    };
  }, [])

  // Affichage ( render )

  return <section className={aboutPage ? 'banner_about' : 'banner'}>
    {!aboutPage && <p>Chez vous, partout et ailleurs</p>}
    </section>
}

export default Banner
