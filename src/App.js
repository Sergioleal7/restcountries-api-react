import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar'
import Container from './pages/Container';

function App() {
  return (
   <div>
     <Navbar />
     <Container />
   </div>
  );
}

export default App;
