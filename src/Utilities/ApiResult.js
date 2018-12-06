import React, { Component } from 'react';

import axios from 'axios';
const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'

class AppResults extends Component {

    constructor(props){
        super(props);
        this.state = {
            cats : []
        }
    }

    componentDidMount(){
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'x-api-key': 'd70ced34-3597-4aa8-ad8c-2861cbe8452c'
        }
        // get the list of cats 
        axios.get(apiUrl).then(res => {
            this.setState({
                cats : res.data
            })
        })
    
        /*
        axios.post(url, {})
        */
    }

    // voteForCat = (id) => {
        
    // }

    render() {
        return (
          <ul>
            { this.state.cats.map(cat => <li><img src={cat.image.url} alt={cat.image.id} /></li>)}
          </ul>
        )
      }
}

export default ApiResult;