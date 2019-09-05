import React, { Component } from 'react'
import './style.css'
import learners from './learners.png'
import usericon from './usericon.png'

 class Learner extends Component {
    render() {
        return (
            <div className="lcontainer">
                <div className="learners">        
                <img src={learners} className="learnericon" alt=" "/>
                <span className="ln">Learners</span>
                </div>
                <div className="user">        
                <img src={usericon} className="usericon" alt=" "/>
                <span className="stdnt">Jeevan Mate</span>
                </div>
            </div>
        )
    }
}
export default Learner;