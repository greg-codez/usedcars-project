import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cars from './component/items/Cars';
import Create from './component/create';
import './App.css';
import './cars.css';
import useFetch from './useFetch';

function App() {

  const { data, loading, error } = useFetch('https://yegorka78.github.io/gscars/data/db.json')
  if (loading) return <h1> LOADING ... </h1>
  if (error) console.log(error);

  return (
    <Routes>
      <Route path ="/" element={<Cars data={data}/>}/>
      <Route path ="/create" element={<Create/>}/>
    </Routes>
  );
}

export default App;
