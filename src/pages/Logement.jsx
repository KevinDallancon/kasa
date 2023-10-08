import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Slideshow from '../components/Slideshow/Slideshow';
import Collapse from '../components/Collapse/Collapse';

import dataLogement from '../data/dataLogement.json';

import starGrey from '../assets/star_grey.png';
import starPink from '../assets/star.png';

function Logement() {

  const [data, setData] = useState({});
  const [imageSlider, setImageSlider] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    const foundData = dataLogement.find((dataItem) => dataItem.id === id);
    
    if (foundData) {
      setData(foundData);
      setImageSlider(foundData.pictures);
    } else {
      navigate('/Error404');
    }
  }, [id, navigate]);

  const name = data?.host?.name?.split(' ');
  const rating = data?.rating;
  const description = data?.description;
  const equipments = data?.equipments;

  return (
    <main className='flex'>
      <Slideshow imageSlider={imageSlider} />
      <section className="logement">
        <div className="logement_content">
          <div className="logement_content_infos">
            <h1>{data?.title}</h1>
            <p>{data?.location}</p>
            <p className='logement_content_infos_tag'>
              {data?.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </p>
          </div>
          <div className="logement_content_host">
            {name && (
              <div className='logement_content_host_container'>
                <div className='logement_content_host_container_flex'>
                  <div className="logement_content_host_container_flex_name">
                    <span>{name[0]}</span>
                    <span>{name[1]}</span>
                  </div>
                  <img src={data.host?.picture} alt="Photo de profil" />
                </div>
                <div className="logement_content_host_container_stars">
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return <img key={index} src={ratingValue <= rating ? starPink : starGrey} alt="star" />;
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className='logement_collapse'>
          <div className='logement_collapse_description'>
          <Collapse title={'Description'} content={description} />
          </div>
          <div className='logement_collapse_equipement'>
          <Collapse title={'Équipements'} content={equipments} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Logement;
