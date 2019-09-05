import React, { Component } from 'react'
import Sidebar from './component/sidebar/index.js';
import Navbar from './component/navbar/index.js';
import Search from './component/search/index.js';
import Calendar from './component/calendar/index.js';
import Card from './component/card/index.js';

 class App extends Component {
  //  batchdata:[
  //    {
  //      batchid   :32,
  //      batchname :"Neetika kapur",
  //      batchstart: "06-06-2019",
  //      batchtime : "11:00",
  //      curriculam :v1,
  //      lessonplan:v1,
  //      plantoshow :30,

  //    }
  //  ]

  render() {
    return (
      <div className="App">
        <Navbar/> 
         <Sidebar/>
        <Search/>
        <Calendar/>
        <Card/>
      </div>
    )
  }
}
export default App;
