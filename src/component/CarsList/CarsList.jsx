import React, {useState } from 'react';
import ProductCard from './component/card/ProductCard'
import CarFilter from './component/Filter/CarFilter'
import Menu from '../menu/Menu';
import './CarsList.sass'


function CarsList({ data }) {
    const { cars } = data


    const carsbyYear = cars.sort((a, b) => {
        return b.year - a.year
    })
    const carsbyId = cars.sort((a, b) => {
        return b.id - a.id
    })

return (
    <div className='carContainer'>
        <div>
           <CarFilter 
             data = { cars } 
           />
        </div>
        <div className="carList">
            {carsbyId.map(car => (
                <ProductCard
                    data = { car }
                    />
            ))}
        </div>
        
    </div>
);
}

export default CarsList;