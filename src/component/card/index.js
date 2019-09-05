import React, { Component } from 'react'
import nameicon from './nameicon.png';
import startdate from './startdate.png';
import timer from './timer.png'
import zoom from './zoom.png'

import './style.css';
import Mentorsession from '../mentorsession/index.js'
import Learner from '../learners';

// const data=[
//     {
//         batch :32,
//         batchname:"neetika kapur",
//         startdate:06-june-2019


//     }
// ]

export default class Card extends Component {
    render() {
        return (
            <div className="container">
            <div className="cardbody">
               
                <div>
                    <img src={nameicon} className="nameicon" alt=""/>
                    <span className="text">neetika kapur</span>
                </div>
                <div>
                    <span className="id">Batch id</span>
                    <span className="idnumber">#32</span>
                </div>
                    <div>
                    <img src={startdate}className="startdateicon" alt=""/>
                    <span className="date">06-june-2019</span>
                    </div>
                    <div>
                    <img src={timer} className="timelogo" alt=" "/>
                    <span className="time">11:00</span>
                    </div>
                    <span className="curriculam">curriculam : v1</span>
                    <span className="lp">lesson plan : v1</span>
                    <span className="pts">plan to show :30</span>

                    <div className="zoom">
                    <a href="https://zoom.us/" target="_blank" rel="noopener noreferrer" value="zoom"><button id="mybtn " className="zoombtn">Join Zoom
                    </button>
                    <img src={zoom} alt="" className="zoomicon"/>
                    </a>
                    </div>
                        <Mentorsession/>
                        <Learner/>
                </div>
            </div>
        )
    }
}
