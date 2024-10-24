import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFoundPage from './notfound/NotFoundPage';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /></>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
