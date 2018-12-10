import React, { Component } from 'react';
import axios from 'axios';

import CatCarousel from '../Components/Carousel';

const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'

export default class ApiResult extends Component {

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
            console.log('cats in api ', res.data);
            this.setState({
                cats : res.data
            });
        })
    }

    render() {
        return (
            <div>
                 <CatCarousel cats={this.state.cats} />
            </div>
            
        //   <ul>
        //     { this.state.cats.map(cat => <li key={cat.image.id}><img src={cat.image.url} alt={cat.image.id} /></li>)}
        //   </ul>
        );
      }
}


