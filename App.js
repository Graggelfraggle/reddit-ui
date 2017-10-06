import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Search from './Search.js';

class App extends Component {

  constructor(){
      super();
      this.state={
       
        term: ''
      };
    }
    
    handleTermChange(term) {
      this.setState({
        searchterm:term,
      })

      
  };

  render() {
       return (

      <div className="App" >
      
        <Search onTermChange={term => this.handleTermChange(term)} />
        
        
      </div>
    );
  }

}

export default App;

/*
Box to type in and search for a sub to display messages. 
Ask Kacper how to better format it ?

Put 
http://www.reddit.com/r/me_irl.json
into jsonviewer
http://jsonviewer.stack.hu/
then make your app according to the specifications in the pad

https://daveceddia.com/ajax-requests-in-react/

Thing calls container with a url and cycles 
through for 20 or however many are requested
*/
