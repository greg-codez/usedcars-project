import React, { useState } from "react";
import "./CarFilter.sass";

const CarFilter = (data) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleMakes, setVehiclesMakes] = useState([]),
  [selectedCarId, chooseMakeView] = useState('All Makes')
  
  const entries = Object.entries(data)
  console.log('display filter entries', entries)
  console.log(typeof entries)
  
  
   /* Unique Car Makes for our drop down selector */
	let uniqueCarMakes = [...new Set(entries.map(car => car.make))]

	/* Lets sort Car Makes alphabetically for the select drop down. */
	uniqueCarMakes.sort((a, b) => a[0].localeCompare(b[0]))

  const handleMakeChange = (e) => {
    setSelectedMake(e.target.value);
    setSelectedModel("");
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="car-filter">
      <h2>Filter Cars</h2>
     {uniqueCarMakes.length > 0 &&  // make sure we have data 
          //populate drop down selection with unique sorted makes
              <div className='selectMake'>
                  <select name='viewMakes' value={selectedCarId} onChange={e => chooseMakeView(e.target.value)}>
                      <option key='999999' value={'All Makes'}>All Makes</option>
                      {uniqueCarMakes.map(item => ( 
                          <option key={item} {...selectedCarId === item ? 'selected' : ''} value={item}>
                              {item}
                          </option>
                      ))}
                  </select>
              </div>
         }
      <label htmlFor="make-select">Make:</label>
      <select id="make-select" value={selectedMake} onChange={handleMakeChange}>
        <option value="">Select a make</option>
        <option value="toyota">Toyota</option>
        <option value="honda">Honda</option>
        <option value="nissan">Nissan</option>
      </select>

      {selectedMake && (
        <div className="model-filter">
          <label htmlFor="model-select">Model:</label>
          <select
            id="model-select"
            value={selectedModel}
            onChange={handleModelChange}
          >
            <option value="">Select a model</option>
            {selectedMake === "toyota" && (
              <>
                <option value="corolla">Corolla</option>
                <option value="camry">Camry</option>
                <option value="prius">Prius</option>
              </>
            )}
            {selectedMake === "honda" && (
              <>
                <option value="accord">Accord</option>
                <option value="civic">Civic</option>
                <option value="crv">CR-V</option>
              </>
            )}
            {selectedMake === "nissan" && (
              <>
                <option value="altima">Altima</option>
                <option value="sentra">Sentra</option>
                <option value="rogue">Rogue</option>
              </>
            )}
          </select>
        </div>
      )}
    </div>
  );
};

export default CarFilter;