import React, { useState, useEffect } from 'react';
import './CarFilter.sass';

function CarFilter({ selectedMake, setSelectedMake, selectedModel, setSelectedModel, selectedYear, setSelectedYear, data }) {
  const makes = Array.from(new Set(data.map(car => car.make)));
  const models = Array.from(new Set(data.filter(car => car.make === selectedMake).map(car => car.model)));
  const years = Array.from(new Set(data.filter(car => car.make === selectedMake && car.model === selectedModel).map(car => car.year)));

  
  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
    setSelectedModel('');
    setSelectedYear('');
  };

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
    setSelectedYear('');
    setSelectedMake(data.filter(car => car.model === event.target.value)[0].make);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    setSelectedMake('');
    setSelectedModel('');
    setSelectedYear('');
  }, [data]);

  return (
    <div className="carFilterContainer">
      <select value={selectedMake} onChange={handleMakeChange}>
        <option value="">All Makes</option>
        {makes.map((make, index) => (
          <option value={make} key={index}>{make}</option>
        ))}
      </select>
      <select value={selectedModel} onChange={handleModelChange} disabled={selectedMake === ''}>
        <option value="">All Models</option>
        {selectedMake === '' ?
          null :
          models.map((model, index) => (
            <option value={model} key={index}>{model}</option>
          ))
        }
      </select>
      <select value={selectedYear} onChange={handleYearChange} disabled={selectedModel === ''}>
        <option value="">All Years</option>
        {selectedModel === '' ?
          null :
          years.map((year, index) => (
            <option value={year} key={index}>{year}</option>
          ))
        }
      </select>
    </div>
  );
}

export default CarFilter;
