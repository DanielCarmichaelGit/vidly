import React from 'react';
import { Routes, Route,  Navigate } from 'react-router-dom';
import MovieList from './components/movieList';
import Navbar from './components/common/navbar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import Movie from './components/movie';
import NotFound from './components/common/notFound';
import LoginForm from './components/loginForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path='/login' exact element={<LoginForm />}/>
          <Route path='/movies' exact element={<MovieList />}/>
          <Route path='/customers' element={<Customers />}/>
          <Route path='/rentals' element={<Rentals />}/>
          <Route path='/not-found' element={<NotFound />}/>
          <Route path='/' element={<Navigate to='/movies' exact replace/>}/>
          <Route path='/movies/:id' element={<Movie/>}/>
          <Route path='*' element={<Navigate to='/not-found' replace/>}/>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
