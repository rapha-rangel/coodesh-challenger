"use client"

import { useEffect, createContext, useState, ReactNode} from "react";
import { RadiosTypes} from "../types/radios";
import axios from "axios";
import { useFilterSearch } from "@/hooks/useFilterSearch";
import { FilterSearchType } from "@/types/filter-search";

interface FetchRadiosContextType{
  fetcherResponse: RadiosTypes[];
  searchFechterRadios:(value: string)=>void;
  loading: boolean
  setLoading:(value: boolean)=>void
  showMoreRadios:(
    range: number, offset:number
  )=> void
  loadingShowMore:boolean
  fetcher:()=> void
}

export const FetchRadiosContext = createContext<FetchRadiosContextType>({
  fetcherResponse:[],
  searchFechterRadios:()=>{},
  loading: false,
  setLoading:()=>{},
  showMoreRadios:()=>{},
  loadingShowMore: false,
  fetcher:()=> {}
})

interface ProviderProps{
  children: ReactNode
}

export function FetchRadiosContextProvider({children}: ProviderProps){
  const [fetcherResponse, setFetcherResponse] = useState<RadiosTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("")
  const [loadingShowMore, setLoadingShowMore] = useState(false);
  const {type} = useFilterSearch();

  useEffect(() => {
    fetcher()
  }, []);

  const selectedType=()=>{
    if(type ===FilterSearchType.RADIO) return "name"
    if(type ===FilterSearchType.COUNTRY) return "country"
    if(type ===FilterSearchType.LANGUANGE) return "language" 
  }

  const fetcher = async() =>{
    try{
      setLoading(true)
      const response = await axios.get('https://de1.api.radio-browser.info/json/stations/search?limit=12');
      if(response.status ===200){
        setFetcherResponse(response?.data)
        setTimeout(()=>{
          setLoading(false)
        },500)
      }
    } catch(erro){
      console.log(erro)
    }
  }

  const searchFechterRadios=async(value:string)=>{
    try{
      setLoading(true);
      setSearchInput(value);
      const url= `https://de1.api.radio-browser.info/json/stations/search?${selectedType()}=${value}&limit=12`
      const response = await axios.get(url);
      if(response.status ===200){
        setFetcherResponse(response?.data)
        setTimeout(()=>{
          setLoading(false)
        },1000)
      }
    } catch(erro){
      console.log(erro)
    }
  }

  const showMoreRadios = async(range: number, offset:number)=>{
    try{
      setLoadingShowMore(true)
      const url= `https://de1.api.radio-browser.info/json/stations/search?${selectedType()}=${searchInput}&limit=${range}&offset=${offset}`
      console.log(url)
      const response = await axios.get(url);
      if(response.status ===200){
        const arrayResponse =response?.data;
        const concatResponse =fetcherResponse.concat(arrayResponse);
        setFetcherResponse(concatResponse);
        setTimeout(()=>{
          setLoadingShowMore(false)
        },1000)
      }
    } catch(erro){
      console.log(erro)
    }
  }

  return (
    <FetchRadiosContext.Provider
      value={{
        fetcherResponse, searchFechterRadios, loading, 
        setLoading, showMoreRadios, loadingShowMore, fetcher
      }}
    >
      {children}
    </FetchRadiosContext.Provider>
  )
}