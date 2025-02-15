// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import SemesterCard from '../components/SemesterCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Home = () => {
  const semesters = [
    { id: 1, name: 'Semester 1' },
    { id: 2, name: 'Semester 2' },
    { id: 3, name: 'Semester 3' },
    { id: 4, name: 'Semester 4' },
    { id: 5, name: 'Semester 5' },
    { id: 6, name: 'Semester 6' }
  ];

  return (
    <Container>
      <h1>Welcome to Need For Code</h1>
      <p>Your go-to platform for collaborative coding and study material exchange.</p>
      <Cards>
        {semesters.map(semester => (
          <SemesterCard key={semester.id} semesterId={semester.id} name={semester.name} />
        ))}
      </Cards>
    </Container>
  );
};

export default Home;