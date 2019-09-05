import React, { Component } from 'react';
// import search from '../search.png'
import './style.css';

 class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                
                
                <div className="filter">
                    <h3 className="filter-text">FILTER</h3>
                    <div>
                    <h5 className="start-text">Start Date:</h5>
                    {/* <input className="calendar" type="date"  /> */}
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
                        <button id="btn" className="sort-time-box">stat time</button> 

                    </div>
                    

                </div>
            </div>
        )
    }
}
export default Sidebar;