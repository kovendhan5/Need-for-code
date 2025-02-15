// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Semester from './pages/Semester';
import Subject from './pages/Subject';
import Upload from './pages/Upload';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/semester/:semesterId" element={<Semester />} />
        <Route path="/subject/:subjectId" element={<Subject />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;