import stopIcon from '../assets/icons/stop_icon.png';
import Image from "next/image";
import useRadios from '../hooks/useRadios';
import trashIcon from '../assets/icons/delete_icon.png';


export default function  DisplayFavoritesRadios() {
  const {data} = useRadios();
  return(
    <section className="flex flex-col bg-[#4D4D56] border-[1px] border-[#4D4D56] rounded-[10px] 
      shadow-[0px_0px_4px_2px_#4D4D56]">
      <div className='flex py-[22.5px] pl-[22px] gap-[10px] items-center'>
        <Image src={stopIcon} width={29} height={30} alt="search icon" className='min-w-[29px] min-h-[30px]'/>
        <h4 className='uppercase text-basicFontSize leading-basicLineHeight font-semibold'>nome da radio atual</h4>
      </div>
      <ul className='grid grid-cols-2 gap-4'>  
        {data && data.map((radio)=>(
          <li className='flex flex-col shadow-[0px_0px_4px_6px_#62626C] py-[8px] px-[10px] gap-[10px] bg-[#62626C] items-center mb-[26px]' 
            key={radio.changeuuid}>
              <div className='group relative'>
                <img src={radio.favicon}  alt="search icon" className='group rounded-full w-[150px] h-[150px]'/>
                <div className='absolute left-[20%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all group-hover:opacity-100'>
                  <Image src={trashIcon} width={16} height={16} alt="trash icon" className='min-w-[16px] min-h-[16px]'/>
                </div>
                <div className='absolute left-[55%] top-[60%] opacity-0 bg-white p-3 rounded-full transition-all group-hover:opacity-100'>
                  <Image src={trashIcon} width={16} height={16} alt="trash icon" className='min-w-[16px] min-h-[16px]'/>
                </div>
              </div>
              <h4 className='uppercase text-subttleFontSize leading-subttleLineHeight font-semibold'>{radio.name}</h4>
          </li>
        ))}
      </ul>
      
    </section>
  )
}

