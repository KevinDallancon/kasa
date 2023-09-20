import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slideshow from '../components/Slideshow/Slideshow';
import Collapse from '../components/Collapse/Collapse';
import dataLogement from '../data/dataLogement.json'

function Logement() {

  const [data, setData] = useState({});
  const [imageSlider, setImageSlider] = useState([]);

  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {

    console.log("ID reçu:", id);
    const foundData = dataLogement.find((dataItem) => dataItem.id === id);
    console.log("Data trouvée:", foundData);
    if (foundData) {
      setData(foundData);
      setImageSlider(foundData.pictures);
    } else {
      navigate('/Error404');
    }
  }, [id, navigate]);

  const name = data?.host?.name?.split(' ');
  const description = data?.description;
  const equipments = data?.equipments;

  return (
    <>
      <Slideshow imageSlider={imageSlider} />
      <main className="logement">
        <div className="logement_content">
          <div className="logement_content_infos">
            <h1>{data?.title}</h1>
            <p>{data?.location}</p>
            <div>
              {data?.tags?.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div className="logement_content_host">
            {name && (
              <div>
                <div className="logement_content_host_name">
                  <span>{name[0]}</span>
                  <span>{name[1]}</span>
                </div>
                <img src={data.host?.picture} alt="host of this accomodation" />
              </div>
            )}
          </div>
        </div>
            <Collapse title={'Description'} content={description} />
            <Collapse title={'Équipements'} content={equipments} />
      </main>
    </>
  );
}

export default Logement;
