import React, { Component } from 'react';
import axios from 'axios';
import {API_URL} from '../config';


export default class SearchBar extends Component {

    state = {
        searchTerm:''
     }

    onChange=(e)=>{
       this.setState({
        searchTerm: e.target.value
       }, () => {
        this.props.onSearch(this.state.searchTerm, this.props.from)
        
       })
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    onChange={this.onChange} 
                    placeholder='#Music #Science #Movies...' 
                    value={this.state.searchTerm}
                    >
                </input>
            </div>
        )
    }
}
