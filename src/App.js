import React, { Component } from 'react'
import Sidebar from './component/sidebar/index.js';
import Navbar from './component/navbar/index.js';
import Card from './component/card/index.js';


 class App extends Component {
  
  render() {
  return (
      <div className="App">
        <Navbar/> 
         <Sidebar/>
        <Card/>
      </div>
    )
  }
}
export default App;
