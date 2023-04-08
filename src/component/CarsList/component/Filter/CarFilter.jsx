import React, { useState, useEffect } from 'react';


const CarFilter = ({ cars, onFilter }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const allMakes = [...new Set(cars.map(car => car.make))];

  const allModels = () => {
    if (selectedMake === '') {
      return [...new Set(cars.map(car => car.model))];
    } else {
      const filteredCars = cars.filter(car => car.make === selectedMake);
      return [...new Set(filteredCars.map(car => car.model))];
    }
  };

  const allYears = () => {
    if (selectedMake === '') {
      return [...new Set(cars.map(car => car.year))];
    } else if (selectedModel === '') {
      const filteredCars = cars.filter(car => car.make === selectedMake);
      return [...new Set(filteredCars.map(car => car.year))];
    } else {
      const filteredCars = cars.filter(car => car.make === selectedMake && car.model === selectedModel);
      return [...new Set(filteredCars.map(car => car.year))];
    }
  };

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
    setSelectedModel('');
    setSelectedYear('');
  };

  const handleModelChange = event => {
    setSelectedModel(event.target.value);
    setSelectedYear('');
  };

  const handleYearChange = event => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    onFilter({ make: selectedMake, model: selectedModel, year: selectedYear });
  }, [selectedMake, selectedModel, selectedYear]);

  return (
    <div className="filter-container">
      <select value={selectedMake} onChange={handleMakeChange}>
        <option value="">Select Make</option>
        {allMakes.map(make => (
          <option key={make} value={make}>
            {make}
          </option>
        ))}
      </select>
      <select value={selectedModel} onChange={handleModelChange} disabled={selectedMake === ''}>
        <option value="">Select Model</option>
        {allModels().map(model => (
          <option key={model} value={model}>
            {model}
          </option>
        ))}
      </select>
      <select value={selectedYear} onChange={handleYearChange} disabled={selectedMake === ''}>
        <option value="">Select Year</option>
        {allYears().map(year => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};


export default CarFilter;
