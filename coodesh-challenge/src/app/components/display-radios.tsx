import useRadios from "../hooks/useRadios";
import selectIcon from '../assets/icons/select_icon.png'
import Image from "next/image";

export default function DisplayRadios() {
  const {data} = useRadios();

  return(
    <section>
      <ul className="flex flex-col gap-[21px]"> 
        {data && data.map((radio)=>(
          <li key={radio.changeuuid} className="flex bg-[#4D4D56] px-[19px] py-[15px] rounded-[10px] text-basicFontSize leading-basicLineHeight text-white shadow-[0px_0px_4px_2px_#4D4D56]">
            <p className="whitespace-nowrap text-ellipsis overflow-hidden w-[90%]">{radio.name}</p>
            <Image src={selectIcon} width={25} height={25} alt="select icon" className="ml-auto"/>
          </li>
        ))}
      </ul>
    </section>
  )
}