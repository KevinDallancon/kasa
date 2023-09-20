import React from 'react';
import Card from '../Card/Card';
import myData from '../../data/dataLogement.json'

function Gallery() {

  return <main className='flex'>
  <div className='box-card'>
    {myData.map((item) => (
        <Card 
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  </main>

}

export default Gallery
