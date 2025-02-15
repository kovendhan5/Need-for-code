// src/components/SubjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: calc(25% - 20px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: #333;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SubjectCard = ({ subjectId, name }) => (
  <Card>
    <h3>{name}</h3>
    <Link to={`/subject/${subjectId}`}>View Subject</Link>
  </Card>
);

export default SubjectCard;