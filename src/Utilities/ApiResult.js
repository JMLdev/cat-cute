import React, { Component } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'
const apiVoteUrl = 'https://api.thecatapi.com/v1/votes'

export function  getCats(){
    axios.defaults.headers = {
        'CONTENT-TYPE': 'APPLICATION/JSON',
        'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
    }

    // GET THE LIST OF CATS 
    return axios.get(apiUrl)
}

// Post Api for Voting
export function isCute(image_id,sub_id,yes_or_no){
    axios.defaults.headers = {
        'CONTENT-TYPE': 'APPLICATION/JSON',
        'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
    }

    const cat = {
        "image_id": image_id,
        "sub_id": sub_id,
        "value": yes_or_no
      };

    axios.post(apiVoteUrl, cat).then(res => {
        console.log(res);
        console.log(res.data);
    })
}