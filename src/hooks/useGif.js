import {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



function useGif(tag){
    const [gif,setgif]=useState('');
    const[load,setload]=useState(false);
    
    

    async function fetchdata(tag){
        setload(true);

        const {data}=await axios.get(tag?`${url}&tag=${tag}`:url);
        const imagesorce=data.data.images.downsized_large.url;
        setgif(imagesorce)
        setload(false)

    }

    useEffect(
        ()=>{
        fetchdata(tag);
        },[]
    )

 


  


    return{gif,load,fetchdata}

}

export default useGif;