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
        <FileName>{file.title}</FileName>
        <FileActions>
          <a href={file.url} target="_blank" rel="noopener noreferrer">
            <DownloadButton>Download</DownloadButton>
          </a>
          <DeleteButton onClick={() => handleDelete(file.id)}>Delete</DeleteButton>
        </FileActions>
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