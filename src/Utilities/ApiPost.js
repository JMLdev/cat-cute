import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1/votes'

export default class ApiResult extends Component {

    constructor(props) {
        super(props);
        this.props = {
            image_id: '',
            sub_id: '',
            value: true,
        }

        this.onClickYes = this.onClickYes.bind(this);
        this.onClickNo = this.onClickNo.bind(this);
    }
    componentDidMount(){
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'x-api-key': 'd70ced34-3597-4aa8-ad8c-2861cbe8452c'
         };
    }
    
    onClickYes = event => {
            event.preventDefault();

            const cat = {
                "image_id": this.props.image_id,
                "sub_id": this.props.sub_id,
                "value": 1
              };

            axios.post(apiUrl, cat).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }   

    onClickNo = event => {
            event.preventDefault();

            const cat = {
                "image_id": this.props.image_id,
                "sub_id": this.props.sub_id,
                "value": 0
              };

            axios.post(apiUrl, cat).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }   
    render() {
        return (
         <div>             
            <button onClick={() => this.onClickYes}>Yes</button>           
            <button onClick={() => this.onClickNo}>No</button>
        </div>     
        );
    }
}
