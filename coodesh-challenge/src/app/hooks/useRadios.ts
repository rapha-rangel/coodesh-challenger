import { useEffect, useState } from 'react';
import axios from "axios";
import { RadiosTypes } from '../types/radios';


export default function useRadios(){
  const [fechterResponse, setFetcherResponse] = useState<RadiosTypes[]>([]);

  useEffect(()=>{
    fetcher()
  },[])

  const fetcher = async() =>{
    const response = await axios.get('https://de1.api.radio-browser.info/json/stations/search?limit=10');
    setFetcherResponse(response?.data)
    console.log(response?.data)
  }
  return {data: fechterResponse}
}