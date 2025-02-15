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

const SearchBar = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #218838;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

const Subject = () => {
  const { subjectId } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);

  useEffect(() => {
    fetchFiles();
  }, [subjectId, searchQuery, currentPage]);

  const fetchFiles = () => {
    axios.get('/api/subject/${subjectId}/files', {
      params: {
        search: searchQuery,
        page: currentPage,
        pageSize: pageSize
      }
    })
      .then(response => {
        setFiles(response.data.files);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching files:', error);
        setLoading(false);
      });
  };

  const handleFileUpload = (event) => {
    if (role !== 'admin') {
      alert('You do not have permission to upload files.');
      return;
    }

    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      // Upload the file to the backend
      axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          alert('File uploaded successfully!');
          // Refresh the file list
          setLoading(true);
          fetchFiles();
        })
        .catch(error => {
          alert('Failed to upload file.');
          console.error('Error uploading file:', error);
        });
    }
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchFiles();
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <Container>
      <BackButton onClick={() => window.history.back()}>Back to Semester</BackButton>
      <h2>Subject {subjectId}</h2>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search Files"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchBar>
      <FileUploadForm handleFileUpload={handleFileUpload} />
      <FileList files={files} />
      <Pagination>
        <PageButton onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>Previous</PageButton>
        <PageButton onClick={() => goToPage(currentPage + 1)}>Next</PageButton>
      </Pagination>
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