import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export default function DefaultLayout({children}: DefaultProviderProps) {
  
  return (
    <section className="px-[16px] pt-[12px] bg-[#2F2F33] md:pt-[24px] md:pr-[50px]">
      {children}
    </section>
  )
}