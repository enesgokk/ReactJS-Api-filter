import React, {useState,useEffect} from 'react'
import App from '../App';
import {Container,Row,Col} from "reactstrap";
import data from "./generated.json";

const Pagination = ({pages, setCurrentPage}) => {


	const numOfPages=[];

	for(let i=1; i<=pages; i++){

		numOfPages.push(i);
	}

	const [currentButton, setCurrentButton] = useState(1);

	return (
		<div>
			  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className={`${currentButton===1 ? 'page-item disabled' : 'page-item'}`}><a className="page-link" href="#!" 
                      onClick={()=>setCurrentButton((prev)=>prev===1 ? prev : prev-1)} >Previous</a></li>
                    
                      {
                      	numOfPages.map((page,index) =>{
                      		return(
                      			<li key={index} className={`${currentButton===page ? 'page-item active' : 'page-item'}`}><a className="page-link" href="#"
                      			onClick={()=> setCurrentButton(page) }
                      			>{page}</a></li>	
                      			)
                      		

                      	})
                      }

                       <li className={`${currentButton===numOfPages.lenght ? 'page-item disabled' : 'page-item'}`}><a className="page-link" href="#!" 
                      onClick={()=>setCurrentButton((prev)=>prev===numOfPages.lenght ? prev : prev+1)} >Next</a></li>

                    </ul>
                  </nav>
		</div>
	)
}

export default Pagination


/*  <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item"><a className="page-link" href="#">Next</a></li> */