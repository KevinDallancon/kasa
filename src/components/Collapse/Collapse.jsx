import React from 'react';
import { useState } from 'react';
import Logo from '../../assets/fleche.png';


function Collapse({title, content}) {

  // State ( etat , données)
  const [active, setActive] = useState(false)

  // Comportement
  const handleToggle = e => {
    setActive(!active)
  }
  // Affichage 
  return (
    <div className={`collapse ${active && "active"}`} >
      <h2 className="collapse_title" onClick={handleToggle}>{title}<img  className={`collapse_title_icon ${active ? 'active' : ''}`} src={Logo} alt="fleche blanche"/></h2>
      <div className={setActive ? 'collapse_content' : 'collapse_content_hidden'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
        </div>
    </div>
  )
}

export default Collapse
