import axios from 'axios';

const apiUrl = 'https://api.thecatapi.com/v1/favourites?sub_id=imfm4j'
const apiVoteUrl = 'https://api.thecatapi.com/v1/votes'
const apiGetVoteUrl = 'https://api.thecatapi.com/v1/votes?sub_id=imfm4j'

const returnHeaders = () => {
    return (
        axios.defaults.headers = {
            'CONTENT-TYPE': 'APPLICATION/JSON',
            'X-API-KEY': 'D70CED34-3597-4AA8-AD8C-2861CBE8452C'
        }
    )
}

export function  getCats(){
    returnHeaders();

    // GET THE LIST OF CATS 
    return axios.get(apiUrl)

    // returns 
    // {
    //     created_at: "2018-12-06T18:19:12.000Z",
    //     id: 4124,
    //     image: {id: "bod", url: "https://cdn2.thecatapi.com/images/bod.jpg"},
    //     image_id: "bod",
    //     sub_id: "imfm4j",
    //     user_id: "imfm4j"
    // }
}

// Post Api for Voting
export function isCute(image_id, sub_id, yes_or_no){
    returnHeaders();

    const cat = {
        "image_id": image_id,
        "sub_id": sub_id,
        "value": yes_or_no
      };

    axios.post(apiVoteUrl, cat);
}

export function getVotes() {
    returnHeaders();

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