import React, {useState,useEffect} from 'react'
import App from '../App';
import {Container,Row,Col} from "reactstrap";
import logo from './logo.png'
import data from "./generated.json";

const AllData = () => {


const[searchh, setSearchh]= useState("ZENTIX");


return data
    .filter(data => data.title === searchh)
    .map(data => {

	return (
		<div >
			<li key={data.id}> {data.title}</li>
		</div>
	)


	}
	);
	
}

export default AllData