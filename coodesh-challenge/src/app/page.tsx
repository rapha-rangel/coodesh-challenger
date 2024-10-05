"use client"

import DefaultLayout from "./components/default-page-layout";
import Header from "./components/header";
import Main from "./components/main";
import NavBar from "./components/navbar";
import Player from "./components/player";

export default function Home() {
  return (
    <>
      <NavBar/>
      <Player/>
      <DefaultLayout>
        <Header/>
        <Main/>
      </DefaultLayout>
    </>
      
  );
}
