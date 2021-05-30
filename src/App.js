import React, {useState,useEffect, useContext} from 'react'
import List from "./components/List";

import AllData from "./components/AllData";
import './App.css';
import {Container,Row,Col} from "reactstrap";
import data from "./generated.json";
import logo from './components/logo.png'
import Pagination from "./components/Pagination";



function App() {




  const[search, setSearch]= useState("");
  const[wanted, setWanted]= useState("ZENTIX");

  const[employees, setEmoloyees]= useState("");

  const handleChange= event=> setSearch(event.target.value);


      function shoot() {  

        {data.map((dataDetail,index)=>{ 
          //console.log(dataDetail.title);
          if(dataDetail.title.includes(search)){  
            console.log(dataDetail.title)
            setWanted(search);
        
          }
          
        })};
      }

        const [currentPage, setCurrentPage] = useState(1)
        const [employeesPerPage, setEmployeesPerPage ] = useState(2)

        const indexOfLastEmployee=currentPage*employeesPerPage;
        const indexOfFirstEmployee=indexOfLastEmployee-employeesPerPage;
        const currentEmployees=employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
        const totalPagesNum= Math.ceil(employees.lenght / employeesPerPage);



  return (
    <div className="App">
      <Row>
          <Col xs="12">
            <img className="logo" src={logo} alt=""/>
          </Col>
        </Row>
        
      <Row className="boxBtn">
          <Col xs="8" >
            <input className="searchBox" type="text" placeholder="Search anything" value={search} onChange={handleChange} />
          </Col>
          <Col xs="2">
            <button className="btn btn-primary" onClick={shoot} >Search</button>
          </Col>
        </Row>

        <Row>
          <Col xs="12">
            <select name="" id="">
              <option value="">Order by</option>
              <option value="">Name ascending</option>
              <option value="">Name descending</option>
              <option value="">Year descending</option>
            </select>
          </Col>
          <br/><br/>
        </Row>

        <List state={wanted} />

        <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} />
    
    </div>
  );
}

export default App;
