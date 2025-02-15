// src/pages/Subject.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FileList from '../components/FileList';

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const BackButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const Subject = () => {
  const { subjectId } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch files for the given subject from backend
    axios.get(`/api/subject/${subjectId}/files`)
      .then(response => {
        setFiles(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
        setLoading(false);
      });
  }, [subjectId]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      // Upload the file to the backend
      axios.post(`/api/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          alert('File uploaded successfully!');
          // Refresh the file list
          setLoading(true);
          axios.get(`/api/subject/${subjectId}/files`)
            .then(response => {
              setFiles(response.data);
              setLoading(false);
            })
            .catch(error => {
              console.error('Error fetching files:', error);
              setLoading(false);
            });
        })
        .catch(error => {
          alert('Failed to upload file.');
          console.error('Error uploading file:', error);
        });
    }
  };

  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>Back to Semester</BackButton>
      <h2>Subject {subjectId}</h2>
      <FileUploadForm handleFileUpload={handleFileUpload} />
      <FileList files={files} />
    </Container>
  );
};

const FileUploadForm = ({ handleFileUpload }) => (
  <div className="file-upload">
    <form>
      <input type="file" onChange={handleFileUpload} />
    </form>
  </div>
);

export default Subject;