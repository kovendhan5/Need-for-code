// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #34495e;
  color: #ecf0f1;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2024 Need For Code. All Rights Reserved.</p>
    <p>Contributors: Kovendhan, ChatGPT 4.0, Copilot.</p>
  </FooterContainer>
);

export default Footer;