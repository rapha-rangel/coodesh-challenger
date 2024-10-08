"use client"

import { LegacyRef, ReactNode, createContext, useEffect, useRef, useState } from "react";
import { PlayerRadioTypes } from "../types/radios";
import { useModalSwitch } from "@/hooks/useModalSwicth";

interface RadioPlayerContextType{
  playerInfo: PlayerRadioTypes;
  handleOpenPlayer:(value: PlayerRadioTypes)=>void,
  openPlayer:boolean,
  runPlayRadio:(value:PlayerRadioTypes)=> void,
  playing: boolean,
  playRadio:()=> void,
  stopRadio:()=>void,
  audioRef:LegacyRef<HTMLAudioElement> ,
  loadingPlay: boolean
}

export const RadioPlayerContext = createContext<RadioPlayerContextType>({
  openPlayer:false,
  handleOpenPlayer: () =>{},
  playerInfo:{id:"",  name:"", url:"", img:"", country:""},
  runPlayRadio: ()=>{},
  playing: false,
  playRadio:()=>{},
  stopRadio:()=>{},
  audioRef: null,
  loadingPlay:false
})

interface ProviderProps{
  children: ReactNode
}

export function RadioPlayerContextProvider({children}: ProviderProps){
  const [openPlayer, setOpenPlayer]= useState(false);
  const [playerInfo, setPlayerInfo]= useState<PlayerRadioTypes>({
    id:"",  name:"", url:"", img:"", country:""
  });
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [loadingPlay, setLoadingPlay] =useState(false);

  useEffect(() => {
  }, [audioRef]);

  const handleOpenPlayer =(value:PlayerRadioTypes)=>{
    setPlayerInfo(value);
    setPlaying(false);
    stopRadio();
    if(openPlayer===false) setOpenPlayer(true);
  }

  const runPlayRadio=(value:PlayerRadioTypes)=>{
    setPlayerInfo(value);
    if(openPlayer===false) setOpenPlayer(true);
    playRadio();
  }

  const playRadio =()=>{
    setLoadingPlay(true);
    setTimeout(()=>{
      audioRef.current?.play();
      if(audioRef.current?.duration !== Infinity){
        audioRef.current?.pause();
        setPlaying(false);
      } else{
        setPlaying(true);
      }
      setLoadingPlay(false);
    },2000)
  }

  const stopRadio =()=>{
    audioRef.current?.pause();
		setPlaying(false);
  }

  return(
    <RadioPlayerContext.Provider 
      value={{
        openPlayer, handleOpenPlayer, playerInfo, runPlayRadio, playing, playRadio, stopRadio, audioRef, loadingPlay
      }}>
      {children}
    </RadioPlayerContext.Provider>
  )
}