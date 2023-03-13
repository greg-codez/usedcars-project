import React, { useState } from 'react'
import { Link } from "react-router-dom";
//import { useDispatch } from 'react-redux'
//import { saveCar } from '../../features/cars/carSlice'
import './create.css'

const Create = () => {
	const
		[make, setMake] = useState(''),
		[model, setModel] = useState(''),
		[submodel, setSubmodel] = useState(''),
		[engine, setEngine] = useState(''),
		[transmission, setTransmission] = useState(''),
		[year, setYear] = useState(''),
		[color, setColor] = useState(''),
		[colorHex, setColorHex] = useState(''),
		[image, setImage] = useState('')
	
	//const dispatch = useDispatch()
	
	function onCreatePost(e) {
		e.preventDefault()
		// const postData = {
		// 	make,
		// 	model,
		// 	submodel,
		// 	engine,
		// 	transmission,
		// 	year,
		// 	color,
		// 	colorHex,
		// 	image
		// }
		//dispatch(saveCar(postData))
	}
	return (
		<div className='createFormContainer'>
			<header>
				<Link className={'addForm'} to='/'> List All </Link>
			</header>
			<div className={'formBody'}>
				<h1>Create New Record</h1>
				<form className={'createForm'} onSubmit={onCreatePost}>
					<label>
						Make:
						<input type="text" name="make" className={'formInput'} onChange={(e) => setMake(e.target.value)} value={make} />
					</label>
					<label>
						Model:
						<input type="text" name="model" className={'formInput'} onChange={(e) => setModel(e.target.value)} value={model} />
					</label>
					<label>
						submodel:
						<input type="text" name="submodel" className={'formInput'} onChange={(e) => setSubmodel(e.target.value)} value={submodel} />
					</label>
					<label>
						engine:
						<input type="text" name="engine" className={'formInput'} onChange={(e) => setEngine(e.target.value)} value={engine} />
					</label>
					<label>
						transmission:
						<input type="text" name="transmission" className={'formInput'} onChange={(e) => setTransmission(e.target.value)} value={transmission} />
					</label>
					<label>
						year:
						<input type="text" name="year" className={'formInput'} onChange={(e) => setYear(e.target.value)} value={year} />
					</label>
					<label>
						color:
						<input type="text" name="color" className={'formInput'} onChange={(e) => setColor(e.target.value)}value={color} />
					</label>
					<label>
						colorHex:
						<input type="text" name="colorHex" className={'formInput'} onChange={(e) => setColorHex(e.target.value)} value={colorHex} />
					</label>
					<label>
						image:
						<input type="text" name="image" className={'formInput'} onChange={(e) => setImage(e.target.value)} value={image} />
					</label>
					<input type="submit" value="Submit" className={'formInput'} />
				</form>
			</div>
		</div>
	)
}

export default Create;
	
