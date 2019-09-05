import React, { Component } from 'react'
import search from './search .png'
import './style.css'

class Search extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" className="search-box" placeholder="search"/>                
                    <img src={search} className="search-logo" alt=" "/>
                </div>
            </div>
        )
    }
}
// import React,{Component} from 'react';
// import './style.css'

// class Search extends Component {
//     state = {
//         search: '',
//         data: [],
//     }

//     handleInputChange = () => {
//         this.setState({
//             search: this.search.value
//         })
//         this.filterArray();
//     }

//     getData = () => {
//         fetch(`http://localhost:4000/restaurants`)
//         .then(response => response.json())
//         .then(responseData => {
//             // console.log(responseData)
//             this.setState({
//                 data:responseData
//             })
//         })
//     }

//     filterArray = () => {
//         var searchString = this.state.query;
//         var responseData = this.state.data
//         if(searchString.length > 0){
//             // console.log(responseData[i].name);
//             responseData = responseData.filter(l => {
//                 console.log( l.name.toLowerCase().match(searchString));
//             })
//         }
//     }

//     componentWillMount() {
//         this.getData();
//     }
//     render() {
//         return (
//             <div >
//                 <form>
//                     <input type="text" id="filter" className="search-box" placeholder="Search..." ref={input => this.search = input} onChange={this.handleInputChange}/>
                    
//                 </form>
//                 <div>
//                     {
//                         this.state.data.map((i) =>
//                             <p>{i.name}</p>
//                         )
//                     }
//                 </div>
//             </div>
//         )
//     }
// }


export default Search;

