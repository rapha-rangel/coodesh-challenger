import { FaHeart, FaPlay, FaStop } from "react-icons/fa";
import { useEffect} from "react";
import { useRadioPlayer } from "../hooks/useRadioPlayer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import imageNotFound from "../utils/image-not-found";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { addOrRemoveRadioPlaylist } from "../utils/add-favorite-playlist";

export default function Player (){
	const {openPlayer, playerInfo, playRadio, stopRadio, playing, audioRef, loadingPlay}= useRadioPlayer();
	const {userRadio, updateLocalStorage} = useLocalStorage();
	useEffect(()=>{
	},[playerInfo])

  return(
		<section className={`fixed flex justify-between items-center px-8 py-2 bg-[#2F2F33] w-full z-20 border-t-2 border-[#8d8a8a39] transition-all duration-500
			${openPlayer? "bottom-0 transition-all duration-500":"-bottom-16 "}`}>
			<div className="flex gap-8 items-center">
				<img src={imageNotFound(playerInfo.img)} alt="logo"
				className={`rounded-full w-[30px] h-[30px]  transition-all duration-250`}/>
				<div className="flex flex-col line-clamp-1">
					<p className="text-subtitleFontSize leading-subtitleLineHeight text-white line-clamp-1 ">{playerInfo.name}</p>
					<span className="text-[8px] leading-subtitleLineHeight text-white line-clamp-1">{playerInfo.country}</span>
				</div>
			</div>
			<div className="flex gap-8 items-center">
				<audio src={playerInfo.url} ref={audioRef} />
				{loadingPlay?
					<AiOutlineLoading3Quarters className="animate-spin h-5 w-5 text-white"/>
				:
				<>
					{!playing?
						<FaPlay className="text-white hover:text-iconsColor cursor-pointer"
							onClick={()=> playRadio()}/>
					:
						<FaStop className="text-white hover:text-iconsColor cursor-pointer"
							onClick={()=> stopRadio()}/>
					}
				</>
				}
				{userRadio.isLogged?
					<FaHeart className={`cursor-pointer ${userRadio.favorites.some(item=> item.id=== playerInfo.id)? "text-iconsColor": "text-white"}`}
					onClick={()=>addOrRemoveRadioPlaylist(playerInfo.id, playerInfo.name, playerInfo.url, playerInfo.img, playerInfo.country, updateLocalStorage)}/>
					:null
				}
				
			</div>
		</section>
	)
}