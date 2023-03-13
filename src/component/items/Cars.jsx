import React, {useState } from 'react';
import { Link } from "react-router-dom"
import Car from '../item/Car'
import '../../cars.css'


function Cars({ data }) {
    const [vehicleMakes, setVehiclesMakes] = useState([]),
    [selectedCarId, chooseMakeView] = useState('All Makes'),
    { cars } = data

    /* Unique Car Makes for our drop down selector */
	let uniqueCarMakes = [...new Set(cars.map(item => item.make))]
	/* Lets sort Car Makes alphabetically for the select drop down. */
	uniqueCarMakes.sort((a, b) => a[0].localeCompare(b[0]))

return (
    <div className='carContainer'>
        <header>
            {cars.length > 0 && /* make sure we have data 
            populate drop down selection with unique sorted makes
            */
                <div className='selectMake'>
                    <select name='viewMakes' value={selectedCarId} onChange={e => chooseMakeView(e.target.value)}>
                        <option key='999999' value={'All Makes'}>All Makes</option>
                        {uniqueCarMakes.map(item => ( 
                            <option key={item.key} {...selectedCarId === item ? 'selected' : ''} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            }
            <Link className={'addForm'} to='/create'> Add </Link>
        </header>
        <ul className="carList">
            {cars.map(car => (
                <Car car={car} />
            ))}
        </ul>
    </div>
);
}

export default Cars;