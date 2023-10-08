import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #FF6060;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: 500;
  width: 95%;
  text-align: center;
`;


function Error404() {
  return (
      <section className="errorStyle">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
      </section>
  )
}

export default Error404