import React from 'react';
import Imgbanniere from '../assets/Mask Group.png'
import '../styles/components/Banniere/banniere.scss'

function Banniere() {
  return <div className='BanniereStyle'>
    <img src={Imgbanniere} alt="Montagne"/>
    <h1>Chez vous, partout et ailleurs</h1>
    </div>
}

export default Banniere
