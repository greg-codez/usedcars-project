import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CarsList from './component/CarsList/CarsList';
import Create from './component/create';
import './App.sass';
import useFetch from './component/data/useFetch';

import useMongoDB from './component/data/useMongoDB';

function App() {

  const { data, loading, error } = useFetch('https://greg-codez.github.io/gscars/data/db.json')
//  useMongoDB()

  if (loading) return <h1> LOADING ... </h1>
  if (error) console.log(error);

  return (
    <Routes>
      <Route path ="/usedcars-project/" element={<CarsList data={data}/>}/>
      <Route path ="/create" element={<Create/>}/>
    </Routes>
  );
}

export default App;
