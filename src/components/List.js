import React, {useState,useEffect} from 'react'
import App from '../App';
import {Container,Row,Col} from "reactstrap";
import logo from './logo.png'
import data from "./generated.json";
import Pagination from "./Pagination"



const List = (props) => {



	
	return data
    .filter(data => data.title.includes(props.state))
    .map(data => {

	return (
		<div>
			<Container>
				<Row >
					<Col>
							<div key={data.id} className="resultTable">

								<h4> {data.title}</h4>
								<p> {data.createdAt}</p>		
		 					</div>
		 					
					</Col>
					
				</Row>
			</Container>
		</div>
	);

	}

	);



}

export default List;