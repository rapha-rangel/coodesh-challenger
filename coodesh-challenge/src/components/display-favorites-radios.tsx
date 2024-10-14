import { FaPen, FaTrash, FaPlay } from "react-icons/fa";
import { useModalSwitch } from "../hooks/useModalSwicth";
import { LocalStorageRadiosTypes } from "../types/radios";
import { useRadioPlayer } from "../hooks/useRadioPlayer";
import imageNotFound from "../utils/image-not-found";

interface DisplayRadiosProps{
  filterFavoriteRadiosList:LocalStorageRadiosTypes[]
  removeRadioFromFavoriteList:(value:string)=>void
}

export default function DisplayFavoritesRadios({filterFavoriteRadiosList,removeRadioFromFavoriteList}:DisplayRadiosProps) {
  const {openNavbar, openEditModal, handleOpenEditModal}= useModalSwitch();
  const {handleOpenPlayer, runPlayRadio, playerInfo, playing} = useRadioPlayer();


  const playRadioStation =(id:string, name:string, url:string, img:string, country:string)=>{
    const radioData ={id, name, url,img,country, nickname:name};
    handleOpenPlayer(radioData);
  };

  const runPlayRadioStation =(id:string, name:string, url:string, img:string, country:string)=>{
    const radioData ={id, name, url,img,country};
    runPlayRadio(radioData);
  }
  return(
    <section className={`h-full ${openEditModal?"opacity-20": "opacity-100"}`}>
      <ul className="flex flex-col gap-[21px] py-4 overflow-y-scroll h-[90%]"> 
        {filterFavoriteRadiosList.length===0?
        <>
          {openNavbar ?
            <p className='uppercase text-white m-auto transition-all duration-500 delay-500'>
              Empty favorites list
            </p>
            :
            <p className={`uppercase text-white m-auto transition-all duration-250 delay-0 verticalText md:horizontalText`}>
              Favorites
            </p>
          }
        </>
        :
        filterFavoriteRadiosList && filterFavoriteRadiosList.map((radio:LocalStorageRadiosTypes)=>(
          <li key={radio.id} className={`flex group  bg-[#4D4D56] p-2 rounded-full shadow-[0px_0px_4px_2px_#4D4D56] md:mx-2
            ${openNavbar? "justify-between mx-4": "justify-center cursor-pointer ml-[4px]"}`}>
            <div className="flex gap-4 mr-auto ml-[1px]"
              onClick={playerInfo.id===radio.id && playing?()=>{}:()=> playRadioStation(radio.id, radio.nickname, radio.url, radio.img, radio.country) }
              >
              <div className="relative">
                <img src={imageNotFound(radio.img)} alt="select icon" className={`rounded-full max-w-[22px] max-h-[22px]  transition-all duration-250
                  ${playerInfo.id===radio.id && playing? "opacity-40":"opacity-100"}
                  ${openNavbar? "group-hover:opacity-100": "group-hover:opacity-40"}`}/>
                <FaPlay className={`cursor-pointer absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] group-hover:opacity-100 transition-all duration-250 
                  ${playerInfo.id===radio.id && playing? "opacity-100 text-iconsColor":"opacity-0 text-white"}`}
                onClick={()=>runPlayRadioStation(radio.id, radio.nickname, radio.url, radio.img, radio.country)}/>
              </div>
              <p className={`text-subtitleFontSize leading-subtitleLineHeight text-white line-clamp-1 md:opacity-100 
                ${openNavbar? "opacity-100": "opacity-0 hidden md:line-clamp-1"}`}>{radio.nickname}</p>
            </div>
            <div className={`transition-all duration-500 items-center gap-4 md:flex md:opacity-100 ${openNavbar? "opacity-100 flex": "opacity-0 hidden"} md:hidden md:opacity-0 md:group-hover:flex md:group-hover:opacity-100`}>
              <FaPen className="transition-all duration-500 text-white hover:text-iconsColor cursor-pointer"
                onClick={()=>handleOpenEditModal({id:radio.id, name:radio.nickname})}/>
              <FaTrash className="transition-all duration-500 text-white hover:text-iconsColor cursor-pointer"
                onClick={()=>removeRadioFromFavoriteList(radio.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}