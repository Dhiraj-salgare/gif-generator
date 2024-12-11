import {useEffect, useState} from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner'
import useGif from '../hooks/useGif';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag(){
    
    // const [gif,setgif]=useState('');
    // const[load,setload]=useState(false);
    const[tag,settag]=useState('')
    

    // async function fetchdata(){
    //     setload(true);
    //      const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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

    const{gif,load,fetchdata}=useGif(tag);

    function clickHandler(){
        fetchdata(tag)
    }


    function changehandler(event){
        settag(event.target.value)
    }
    return(
        <div className='mt-[100px] w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5'>
            <h1 className='border border-black text-center'>Random Gif</h1>

           {
            load ? (<Spinner></Spinner>):(<img src={gif} width="450"></img>)
           }


           <input type='text'  className='w-9/12  bg-white mx-auto py-2 mb-[3px]' onChange={changehandler} value={tag}></input>
            
            <button onClick={clickHandler} className='w-9/12  bg-white mx-auto py-2 mb-[20px]'>Generate</button>
        </div>
    )
}


export default Tag;