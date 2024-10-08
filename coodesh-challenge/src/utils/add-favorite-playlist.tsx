import { LocalStorageRadiosTypes, UserTypes } from "../types/radios";

export const addOrRemoveRadioPlaylist =(id:string, name:string, url:string, img:string, country:string,
  updateLocalStorage:(value:UserTypes)=>void)=>{
  const radioItem = localStorage.getItem("user-radio");
  if(radioItem){
    const userRadioItem = JSON.parse(radioItem);
    const favoritesItemArray = userRadioItem.favorites;

    const existingArrayIndex = favoritesItemArray.findIndex((item:LocalStorageRadiosTypes) => item.id === id);
    console.log( favoritesItemArray)
    if(existingArrayIndex !== -1){
      const removeFavList = favoritesItemArray.filter((item:{id:string}) => item.id !== id);
      updateLocalStorage({...userRadioItem,favorites:removeFavList});
    } else{
      favoritesItemArray.push({
        id, name, url,img,country, nickname:name
      })
      updateLocalStorage({...userRadioItem,favorites:favoritesItemArray});
    }
  }
}