"use client"

import { useEffect } from "react";
import DefaultLayout from "../../components/default-page-layout";
import Header from "../../components/header";
import Main from "../../components/main";
import NavBar from "../../components/navbar";
import Player from "../../components/player";
import { useModalSwitch } from "../../hooks/useModalSwicth";
import EditNicknameModal from "../../components/edit-nickname-modal";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useSearchParams } from "next/navigation";


export default function RadioMain() {
  const {handleCloseNavbar} = useModalSwitch();
  const { userRadio, updateUserRadio} = useLocalStorage();
  const pageParams = useSearchParams();
  const formatPageParams =  pageParams.toString().slice(5, pageParams.toString().length);

  useEffect(() => {
    const handleResponsiveSwicthNavbar= () => {
      if (window.innerWidth > 768) handleCloseNavbar()
    };
    window.addEventListener('resize', handleResponsiveSwicthNavbar);
    return () => {
      window.removeEventListener('resize', handleResponsiveSwicthNavbar);
    };
  }, [handleCloseNavbar]);

  useEffect(()=>{
    const userOnLocalStorage = localStorage.getItem("user-radio");
    if(formatPageParams){
      if(userOnLocalStorage ){
        const user = JSON.parse(userOnLocalStorage);
        if(user.user ===formatPageParams){
          updateUserRadio({...user, isLogged:true})
          }
      }else{
        const newUser ={
          user:formatPageParams, isLogged: false, favorites:[]
        }
        updateUserRadio(newUser)
      }
    }
  },[formatPageParams])

  return (
    <>
    {userRadio.isLogged?
      <NavBar/>
      :null
    } 
      <Player/>
      <EditNicknameModal/>
      <DefaultLayout>
        <Header/>
        <Main/>
      </DefaultLayout>
    </>
      
  );
}


