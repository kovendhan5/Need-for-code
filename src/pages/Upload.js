// src/pages/Upload.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../components/Loader';

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #218838;
  }
`;

const Upload = () => {
  const [file, setFile] = useState(null);
  const [folderId, setFolderId] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!file || !folderId) {
      alert('Please select a file and enter the folder ID.');
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folderId', folderId);
    // Upload the file to the backend
    axios.post('https://your-gs-webapp-url/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        alert('File uploaded successfully!');
        setLoading(false);
        navigate('/');
      }
      .catch(error => {
        console.error('Error uploading file:', error);
        setLoading(false);
        alert('Failed to upload file.');
      });
  };

  return (
    <Container>
      <h2>Upload File</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
        />
        <Input
          type="text"
          placeholder="Folder ID"
          value={folderId}
          onChange={(event) => setFolderId(event.target.value)}
        />
        <SubmitButton type="submit">Upload</SubmitButton>
      </Form>
      {loading && <Loader />}
    </Container>
  );
};

export default Upload;