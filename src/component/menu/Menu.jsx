import React, {useState } from 'react';
import { Link } from "react-router-dom";
import './Menu.sass';

function Menu({ carmakes }) {
    const [vehicleMakes, setVehiclesMakes] = useState([]),
    [selectedCarId, chooseMakeView] = useState('All Makes')

    return (
        <div>
            <label className="hamburger-menu">
                <input type="checkbox" />
            </label>
            <aside className="sidebar">
                <div className='menu-title'>Silverback Motors</div>     

                <div><Link to='/usedcars-project/'>Vehicles</Link></div>
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/contact'>Contact</Link></div>
                <div><Link to='/create'>Add</Link></div>
                
            </aside>
        </div>
    );
    }

export default Menu;