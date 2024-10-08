import { FaHeart, FaPlay} from "react-icons/fa";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useRadioPlayer } from '../hooks/useRadioPlayer';
import { useFecthRadios } from "../hooks/useFetchRadios";
import Loading from "./loading";
import imageNotFound from "../utils/image-not-found";
import { addOrRemoveRadioPlaylist } from "../utils/add-favorite-playlist";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function  DisplayRadios() {
  const {fetcherResponse, loading, showMoreRadios, loadingShowMore} = useFecthRadios();
  const {runPlayRadio, playerInfo, playing}= useRadioPlayer();
  const {userRadio, updateLocalStorage}=useLocalStorage();

  const playRadioStation =(id:string, name:string, url:string, img:string, country:string)=>{
    const radioData ={id, name, url,img,country, nickname:name};
    const ifRadioInFavoriteList =userRadio.favorites.filter((item)=> {
      if(item.id ===id) return {id, name: item.nickname, url, img, country }
    })
    runPlayRadio(ifRadioInFavoriteList.length===0?radioData:ifRadioInFavoriteList[0]);
  }

  return(
    <section className="flex flex-col bg-[#4D4D56] border-[1px] border-[#4D4D56] rounded-[10px] py-8 
      shadow-[0px_0px_4px_2px_#4D4D56]">
      {loading?
        <Loading/>
      :
      <ul className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-500'>  
        {fetcherResponse && fetcherResponse.map((radio)=>(
          <li className='flex flex-col shadow-[0px_0px_4px_6px_#62626C] py-[8px] px-[10px] gap-[10px] bg-[#62626C] my-2' 
            key={radio.stationuuid}>
              <div className='group relative flex justify-center'>
                <img src={imageNotFound(radio.favicon)}  alt="search icon" className='group rounded-full w-[150px] h-[150px]'/>
                <div className='absolute  -translate-x-[80%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all duration-500 cursor-pointer group-hover:opacity-100'
                  onClick={playerInfo.id===radio.stationuuid && playing?()=>{}:()=> playRadioStation(radio.stationuuid, radio.name, radio.url_resolved, radio.favicon, radio.country)}>
                  <FaPlay className={`min-w-[16px] min-h-[16px] transition-all duration-500  ${playerInfo.id===radio.stationuuid && playing?"text-iconsColor": "text-black"}`}/>
                </div>
                {userRadio.isLogged?
                  <div className='absolute  translate-x-[80%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all duration-500 cursor-pointer group-hover:opacity-100'
                    onClick={()=>addOrRemoveRadioPlaylist(radio.stationuuid, radio.name, radio.url_resolved, radio.favicon, radio.country, updateLocalStorage)}>
                    <FaHeart className={`min-w-[16px] min-h-[16px] transition-all duration-500  ${userRadio.favorites.some(item=> item.id=== radio.stationuuid)? "text-iconsColor": "text-black"}`}/>
                  </div>
                  :null
                }   
              </div>
              <div className="text-left">
                <h4 className='uppercase text-subtitleFontSize leading-subtitleFontSize font-semibold line-clamp-1'>{radio.name}</h4>
                <p className='text-[.7rem] font-semibold text-[#dfd8d8] line-clamp-1'>{radio.country}</p>
              </div>
          </li>
        ))}
      </ul>
      }
      <button className="flex justify-center border-gray-500 border-2 bg-gray p-4 w-full my-4 text-3xl font-bold text-gray-500 uppercase cursor-pointer transition-all duration-500 hover:text-white hover:bg-[#2F2F33]"
        onClick={()=>showMoreRadios(12, fetcherResponse.length)}>
          {loadingShowMore?
            <AiOutlineLoading3Quarters className="animate-spin h-9 w-9 text-white"/>
            :"Show more"}</button>

    </section>
  )
}

