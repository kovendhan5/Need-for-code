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
  const semesters = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <h1>Welcome to Need For Code</h1>
      <p>Your go-to platform for collaborative coding and study material exchange.</p>
      <Cards>
        {semesters.map(semester => (
          <SemesterCard key={semester} semesterId={semester} />
        ))}
      </Cards>
    </Container>
  );
};

export default Home;