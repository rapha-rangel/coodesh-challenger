import useRadios from '../hooks/useRadios';
import { FaHeart, FaPlay} from "react-icons/fa";


export default function  DisplayFavoritesRadios() {
  const {data} = useRadios();
  return(
    <section className="flex flex-col bg-[#4D4D56] border-[1px] border-[#4D4D56] rounded-[10px] py-8
      shadow-[0px_0px_4px_2px_#4D4D56]">
      <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>  
        {data && data.map((radio)=>(
          <li className='flex flex-col shadow-[0px_0px_4px_6px_#62626C] py-[8px] px-[10px] gap-[10px] bg-[#62626C] items-center my-2' 
            key={radio.changeuuid}>
              <div className='group relative'>
                <img src={radio.favicon}  alt="search icon" className='group rounded-full w-[150px] h-[150px]'/>
                <div className='absolute left-[20%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all duration-500 cursor-pointer group-hover:opacity-100'>
                  <FaPlay className='min-w-[16px] min-h-[16px] '/>
                </div>
                <div className='absolute left-[55%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all duration-500 cursor-pointer group-hover:opacity-100'>
                  <FaHeart className='min-w-[16px] min-h-[16px] '/>
                </div>
              </div>
              <h4 className='uppercase text-subttleFontSize leading-subttleLineHeight font-semibold'>{radio.name}</h4>
          </li>
        ))}
      </ul>
      
    </section>
  )
}

