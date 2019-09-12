import React, { Component } from 'react';
import './TestVideo.scss';
import Portfolio from '../Portfolio/Portfolio.js';



export class TestVideo extends Component {

    constructor(props){
        super(props);
        
        

    }

    componentDidMount(){
        
    }

  

    render() {
        return (
            <div id="TestVideo">
                <Portfolio showing="brand"/>
            </div>
            
        )
    }
}

export default TestVideo
