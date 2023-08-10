import React from 'react'
import myData from '../data/dataLogement.json'
import '../styles/components/Card/card.scss'

function Card() {
  const logements = myData
  console.log(logements)

  return (
    <div>
      {logements.map((logement, index) => (
        <div key={index} className="CardStyle">
          <h2>{logement.title}</h2>
          <img src={logement.cover} alt="Photo de logement" />
        </div>
      ))}
    </div>
  )
}

export default Card
