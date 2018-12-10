import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'


export function  getCats(){
    axios.defaults.headers = {
        'CONTENT-TYPE': 'APPLICATION/JSON',
        'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
    }

    // GET THE LIST OF CATS 
    return axios.get(apiUrl)
}
