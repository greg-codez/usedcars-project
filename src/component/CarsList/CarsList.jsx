import React, {useState } from 'react';
import ProductCard from './component/card/ProductCard'
import Menu from '../menu/Menu';
import './CarsList.sass'


function CarsList({ data }) {
    const { cars } = data
    const [vehicleMakes, setVehiclesMakes] = useState([]),
    [selectedCarId, chooseMakeView] = useState('All Makes')

    /* Unique Car Makes for our drop down selector */
	//let uniqueCarMakes = [...new Set(cars.map(item => item.make))]
	/* Lets sort Car Makes alphabetically for the select drop down. */
	//uniqueCarMakes.sort((a, b) => a[0].localeCompare(b[0]))

return (
    <div className='carContainer'>
            {// uniqueCarMakes.length > 0 && 
            /* make sure we have data 
            populate drop down selection with unique sorted makes */
            <Menu />
        }
        <div>
            <div className='menu-title'>Silverback Motors</div>
            <div><img className='logoSilverback' src='images/silverback_sml_600.png' /></div>
                    {//uniqueCarMakes.length > 0 && /* make sure we have data 
                    //populate drop down selection with unique sorted makes
                    
                        // <div className='selectMake'>
                        //     <select name='viewMakes' value={selectedCarId} onChange={e => chooseMakeView(e.target.value)}>
                        //         <option key='999999' value={'All Makes'}>All Makes</option>
                        //         {uniqueCarMakes.map(item => ( 
                        //             <option key={item} {...selectedCarId === item ? 'selected' : ''} value={item}>
                        //                 {item}
                        //             </option>
                        //         ))}
                        //     </select>
                        // </div>
                    }
        </div>
        <div className="carList">
            {cars.map(car => (
                <ProductCard
                    data = {car}
                    />
            ))}
        </div>
        
    </div>
);
}

export default CarsList;