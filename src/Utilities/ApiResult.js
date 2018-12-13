import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'
const apiVoteUrl = 'https://api.thecatapi.com/v1/votes'
const apiGetVoteUrl = 'https://api.thecatapi.com/v1/votes?sub_id=imfm4j'

export function  getCats(){
    axios.defaults.headers = {
        'CONTENT-TYPE': 'APPLICATION/JSON',
        'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
    }

    // GET THE LIST OF CATS 
    return axios.get(apiUrl)
}

export function findCute(cat_id) {
    axios.get(apiVoteUrl + cat_id).then(res => {
    })
}
// Post Api for Voting
export function isCute(image_id, sub_id, yes_or_no){
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
        console.log(res.data);
    })
}

export function  getVotes(){
    axios.defaults.headers = {
        'CONTENT-TYPE': 'APPLICATION/JSON',
        'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
    }

    // GET THE VOTES 
    /* Result includes following parameters: (example)
        {
            "country_code": null,
            "created_at": "2018-12-06T18:54:11.000Z",
            "id": 47294,
            "image_id": "9ccXTANkb",
            "sub_id": "imfm4j",
            "value": 1
         },
         We need to use value for vote (1 or 0) and image_id and sub_id to map with the testcats[] list
    */
    return axios.get(apiGetVoteUrl)
}

export function mappingVotes(){
   
}