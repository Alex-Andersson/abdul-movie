import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Navbar from './components/Navbar/Nav';
import Home from './components/Home/Home';
import Movie from './components/Movie/Movie';
import User from './components/User/User';
import Movies from './components/Movie/Movie';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='movies' element={<Movie />} />
          <Route path='user' element={<User />} />
        </Routes>
      </div>
      <div className="my-movies">
    <Movies />
    </div>
    </Router>
  )
}

export default App