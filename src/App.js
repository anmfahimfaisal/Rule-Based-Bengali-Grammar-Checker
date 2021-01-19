import React, { Component } from 'react';
import logo from '../src/image/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Textfield from './Components/Textfield';
import Checkbtn from './Components/Checkbtn';
import Result from './Components/Result';
import Footer from './Components/Footer';
import Loading from './Components/Loading';



class App extends Component {
  render(){
    return(
      
        <div>
          <Navbar />
          <Textfield />
          <Checkbtn />
          <Loading />
          <Result />
          <Footer />
      </div>
      
      
    );
  }
}

export default App;

// Bangla_G a Bengali grammer checker that uses POS tagging and regex parsing to find error in context sensitive multiline text.