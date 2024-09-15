import React from 'react';
import './app.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Main from './components/main/main';
import Footer from './components/footer/footer';
function App() {
  return (
  <>
  <Navbar/>
  <Home/>
  <Main/>
  <Footer/> 
  </>
  );
}

export default App;
