import React, { Component } from 'react';
import plus from './plus.png'
import './style.css';
import Search from '../search/index.js';
import Calendarcontainer from '../calendar/index.js';

 class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <Search/>
                
                 <div className="filter">
                    <h3 className="filter-text">FILTER</h3>
                    <div>
                    <h5 className="start-text">Start Date:</h5>
                    <Calendarcontainer/>
                    </div>
                    <div>
                        <label className="curriculamcontainer">Curriculam:</label>
                        <button id="mybtn " className="radiov1">V1</button>
                        <button id="mybtn " className="radiov2">V2</button>
                    </div>
                    <div>
                        <label className="lessonplan">Lesson Plan:</label>
                        <button id="mybtn " className="lpradiov1">V1</button>
                        <button id="mybtn " className="lpradiov2">V2</button>
                    </div>
                    <div className="sortcontainer">
                        <label>SORT</label>
                        <button id="btn" className="sort-id-box">Id</button> 
                        <button id="btn" className="sort-date-box">start date</button> 
                        <button id="btn" className="sort-time-box">starttime</button> 

                    </div>
                    <div className="addbatch">
                        
                        <button id="btn" className="add">
                        <img  className="plusicon" src={plus} alt="plus"/>
                            Add Batch</button>
                    </div>
                    

                </div>
            </div>
        )
    }
}
export default Sidebar;