import {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import useGif from '../hooks/useGif';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Random(){
    
    // const [gif,setgif]=useState('');
    // const[load,setload]=useState(false);
    

    // async function fetchdata(){
    //     setload(true);
    //      const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //      const {data}=await axios.get(url);
    //      const imagesorce=data.data.images.downsized_large.url;
    //     setgif(imagesorce)
    //     setload(false)

    // }

    // useEffect(
    //     ()=>{
    //     fetchdata();
    //     },[]
    // )

    const {gif,load,fetchdata}=useGif();
    function clickHandler(){
        fetchdata()

    }
    return(
        <div className='mt-[100px] w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
            <h1 className='border border-black text-center'>Random Gif</h1>

           {
            load ? (<Spinner></Spinner>):(<img src={gif} width="450"></img>)
           }
            
            <button onClick={clickHandler} className='w-9/12  bg-white mx-auto py-2 mb-[20px]'>Generate</button>
        </div>
    )
}


export default Random;