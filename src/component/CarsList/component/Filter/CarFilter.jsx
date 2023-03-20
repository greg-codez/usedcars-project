import React, { useState } from "react";
import "./CarFilter.sass";

const CarFilter = ( { data }  ) => {
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [vehicleMakes, setVehiclesMakes] = useState([]),
  [selectedCarId, chooseMakeView] = useState('All Makes'),
  [selectedYearCarId, chooseYearView] = useState('All Years')
  
  
  //const entries = Object.entries(data)

  
  
   /* Unique Car Make, Year for our drop down selector */
	let uniqueCarMakes = [...new Set(data.map(car => car.make))],
  uniqueCarYears = [...new Set(data.map(car => car.year))]

	/* Lets sort Car Makes alphabetically for the select drop down. */
	uniqueCarMakes.sort((a, b) => a[0].localeCompare(b[0]))
  //uniqueCarYears.sort((a, b) => a[0].localeCompare(b[0]))


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
     {uniqueCarYears.length > 0 &&  // make sure we have data 
          //populate drop down selection with unique sorted makes
              <div className='selectYear'>
                  <select name='viewMakes' value={selectedYearCarId} onChange={e => chooseYearView(e.target.value)}>
                      <option key='999999' value={'All Years'}>Years</option>
                      {uniqueCarYears.map(item => ( 
                          <option key={item} {...selectedCarId === item ? 'selected' : ''} value={item}>
                              {item}
                          </option>
                      ))}
                  </select>
              </div>
              }

    </div>
  );
};

export default CarFilter;