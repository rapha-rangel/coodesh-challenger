import { useLocalStorage } from "@/hooks/useLocalStorage";
import DisplayRadios from "./display-radios";


export default function Main() {
  const {userRadio} = useLocalStorage();
  
  return(
    <section className={`md:-translate-y-6 ${userRadio.isLogged? "pl-[50px] md:w-3/4 md:ml-auto md:pl-[20px]": "md:m-0 md:w-full pl-0"}`}>
      <p className="block w-[200px] text-white uppercase text-subtitleFontSize leading-subtitleLineHeight font-light mb-1 md:mb-[23px]">Favorite Radios</p>
      <DisplayRadios/>
    </section>
  )
}