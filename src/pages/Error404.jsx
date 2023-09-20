import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #FF6060;
  margin-bottom: 150px;
  font-size: 18px;
  font-weight: 500;
`;


function Error404() {
  return (
      <div className="errorStyle">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
      </div>
  )
}

export default Error404