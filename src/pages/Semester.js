// src/pages/Semester.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SubjectCard from '../components/SubjectCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const SubjectCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const Semester = () => {
  const { semesterId } = useParams();
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    // Fetch subjects for the given semester from backend
    axios.get(`/api/semester/${semesterId}/subjects`)
      .then(response => {
        setSubjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching subjects:', error);
      });
  }, [semesterId]);

  return (
    <Container>
      <h1>Semester {semesterId}</h1>
      <SubjectCards>
        {subjects.map(subject => (
          <SubjectCard key={subject.id} subjectId={subject.id} name={subject.name} />
        ))}
      </SubjectCards>
    </Container>
  );
};

export default Semester;