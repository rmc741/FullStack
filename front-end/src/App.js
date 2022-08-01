import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes>
              <Route exact path="/" element = {<ListEmployeeComponent/>}/>
              <Route path="/employee" element = {<ListEmployeeComponent/>}/>
              <Route path="/add-employee/_add" element = {<CreateEmployeeComponent/>}/>       
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
    
  );
}

export default App;
