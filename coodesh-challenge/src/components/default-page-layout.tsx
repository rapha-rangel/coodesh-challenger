import { useModalSwitch } from "@/hooks/useModalSwicth";
import { useRadioPlayer } from "@/hooks/useRadioPlayer";
import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export default function DefaultLayout({children}: DefaultProviderProps) {
  const {openEditModal} =useModalSwitch();
  const {openPlayer} = useRadioPlayer()
  console.log(openEditModal)
  return (
    <section className={` trasnsition-all duration-250 px-[16px] pt-[12px]  md:pt-[24px] md:px-[50px] 
      ${openEditModal? "opacity-10":"opacity-100"}
      ${openPlayer?"pb-10":"pb-0"}`}>
      {children}
    </section>
  )
}