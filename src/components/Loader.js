// src/components/Loader.js
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 20px auto;
  display: block;
`;

const Loader = () => (
  <LoaderContainer />
);

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export default Loader;