// src/components/FileList.js
import React from 'react';
import styled from 'styled-components';

const FileListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const FileItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
`;

const FileDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileName = styled.div`
  font-weight: bold;
`;

const FileActions = styled.div`
  display: flex;
  gap: 10px;
`;

const DownloadButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #218838;
  }
`;

const PreviewButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2980b9;
  }
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c82333;
  }
`;

const FileList = ({ files }) => (
  <FileListContainer>
    {files.map(file => (
      <FileItem key={file.id}>
        <FileDetails>
          <FileName>{file.title}</FileName>
          <FileActions>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              <DownloadButton>Download</DownloadButton>
            </a>
            <PreviewButton onClick={() => window.open(file.url, '_blank')}>Preview</PreviewButton>
            <DeleteButton onClick={() => handleDelete(file.id)}>Delete</DeleteButton>
          </FileActions>
        </FileDetails>
        <p>{file.description}</p>
        <p>Uploaded on: {file.date} at {file.time}</p>
      </FileItem>
    ))}
  </FileListContainer>
);

const handleDelete = (fileId) => {
  // Implement delete functionality
  // Example:
  // axios.delete(`/api/file/${fileId}`)
  //   .then(response => {
  //     alert('File deleted successfully!');
  //     // Refresh the file list
  //   })
  //   .catch(error => {
  //     alert('Failed to delete file.');
  //     console.error('Error deleting file:', error);
  //   });
  alert('Delete functionality not implemented yet.');
};

export default FileList;