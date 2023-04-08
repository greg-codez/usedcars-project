import React, { useState } from 'react';
import ProductCard from './component/card/ProductCard'
import CarFilter from './component/Filter/CarFilter'
import Menu from '../menu/Menu';
import './CarsList.sass'

function CarsList({ data }) {
    const { cars } = data
    const [selectedModel, setSelectedModel] = useState('')
    const [selectedMake, setSelectedMake] = useState('')
    const [selectedYear, setSelectedYear] = useState('')

    let filteredCars = cars

    if (selectedModel) {
        filteredCars = filteredCars.filter(car => car.model === selectedModel)
    }
    if (selectedMake) {
        filteredCars = filteredCars.filter(car => car.make === selectedMake)
    }

    if (selectedYear) {
        filteredCars = filteredCars.filter(car => car.year === parseInt(selectedYear))
    }

    const carsbyYear = filteredCars.sort((a, b) => {
        return b.year - a.year
    })

    const carsbyId = filteredCars.sort((a, b) => {
        return b.id - a.id
    })

    return (
        <div className='carContainer'>
            <div>
                <CarFilter
                    selectedModel={selectedModel}
                    setSelectedModel={setSelectedModel}
                    selectedMake={selectedMake}
                    setSelectedMake={setSelectedMake}
                    selectedYear={selectedYear}
                    setSelectedYear={setSelectedYear}
                    data={cars}
                />
            </div>
            <div className="carList">
                {carsbyId.map(car => (
                    <ProductCard
                        key={`${car.make}-${car.model}-${car.year}`}
                        make={car.make}
                        model={car.model}
                        year={car.year}
                        data={car}
                    />
                ))}
            </div>
        </div>
    );
}

export default CarsList;
