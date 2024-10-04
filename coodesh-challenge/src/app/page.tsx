"use client"

import DefaultLayout from "./components/default-page-layout";
import Header from "./components/header";
import Main from "./components/main";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar/>
      <DefaultLayout>
        <Header/>
        <Main/>
      </DefaultLayout>
    </>
      
  );
}
