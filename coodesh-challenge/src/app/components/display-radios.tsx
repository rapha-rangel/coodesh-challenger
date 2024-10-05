import { FaPen, FaTrash, FaPlay } from "react-icons/fa";
import { useModalSwitch } from "../hooks/useModalSwicth";

export default function DisplayRadios() {
  const {openNavbar, handleOpenPlayer}= useModalSwitch();
  const arrayRadios:[] = [
  // {
  //   id:1,
  //   nome: "FM dia",
  //   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ3EtxDcn3JjHv7b3PkRNYYKKgNBlL0bM4A&s"
  // },
  // {
  //   id:2,
  //   nome: "Jovem Pan",
  //   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WR19ihfh81IR8g_BGQOi5tF1iaMtSMGivA&s"
  // },
  // {
  //   id:2,
  //   nome: "Jovem Pan",
  //   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WR19ihfh81IR8g_BGQOi5tF1iaMtSMGivA&s"
  // },
  // {
  //   id:2,
  //   nome: "Jovem Pan",
  //   img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WR19ihfh81IR8g_BGQOi5tF1iaMtSMGivA&s"
  // }
  

]
  return(
    <section className="h-full">
      <ul className="flex flex-col gap-[21px] py-4 overflow-y-scroll h-[90%]"> 
        {arrayRadios.length ===0?
          <p className={`uppercase text-white m-auto transition-all duration-250 delay-0 horizontalText
            ${openNavbar? "transition-all duration-500 delay-500": "verticalText md:horizontalText"}`}>
            {openNavbar? "Empty favorites list": "Favorites"}
          </p>
        :
          arrayRadios && arrayRadios.map((radio:{id:string,img:string, nome:string})=>(
            <li key={radio.id} className={`flex group ml-[4px] bg-[#4D4D56] p-2 rounded-full shadow-[0px_0px_4px_2px_#4D4D56] relative 
              ${openNavbar? "justify-between": "justify-center cursor-pointer"}`}>
              <div className="flex gap-4 mr-auto ml-[1px]">
                <img src={radio.img} alt="select icon" className={`rounded-full w-[22px] h-[22px]  transition-all duration-250
                  ${openNavbar? "group-hover:opacity-100": "group-hover:opacity-40"}`}/>
                {openNavbar?null
                :
                <FaPlay className="opacity-0 text-iconsColor cursor-pointer absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] group-hover:opacity-100 transition-all duration-250"/>
                }
                <p className={`text-subtitleFontSize leading-subtitleLineHeight text-white whitespace-nowrap text-ellipsis overflow-hidden md:opacity-100
                  ${openNavbar? "opacity-100 flex": "opacity-0 hidden"}`}>{radio.nome}</p>
              </div>
              <div className={`items-center gap-4 md:flex md:opacity-100 ${openNavbar? "opacity-100 flex ": "opacity-0 hidden"}`}>
                <FaPlay className="text-white hover:text-iconsColor cursor-pointer" onClick={()=> handleOpenPlayer()}/>
                <FaPen className="text-white hover:text-iconsColor cursor-pointer"/>
                <FaTrash className="text-white hover:text-iconsColor cursor-pointer"/>
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}