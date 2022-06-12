import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Incomes from './pages/Incomes';
import Egress from './pages/Egress'
import Form from './pages/Form';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/incomes' element={<Incomes />} />
        <Route path='/egress' element={<Egress />} />
        <Route path='/form' element={<Form />} />
        <Route path='/form/:id/edit' element={<Form />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
