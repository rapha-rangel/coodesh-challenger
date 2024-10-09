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
  loadingPlay: boolean,
  handleClosePlayer:()=> void
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
  loadingPlay:false,
  handleClosePlayer:()=>{}
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
  const {handleOpenSnackbar} = useModalSwitch()

  useEffect(() => {
  }, [audioRef]);

  const handleOpenPlayer =(value:PlayerRadioTypes)=>{
    setPlayerInfo(value);
    stopRadio();
    if(openPlayer===false) setOpenPlayer(true);
  }

  const handleClosePlayer =()=>{
    const reset ={id:"",  name:"", url:"", img:"", country:""}
    setPlayerInfo(reset);
    stopRadio();
    setOpenPlayer(false);
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
        handleOpenSnackbar();
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
        openPlayer, handleOpenPlayer, playerInfo, runPlayRadio, 
        playing, playRadio, stopRadio, audioRef, loadingPlay,
        handleClosePlayer
      }}>
      {children}
    </RadioPlayerContext.Provider>
  )
}