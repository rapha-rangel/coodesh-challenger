import { ReactNode } from "react";

interface DefaultProviderProps {
  children: ReactNode;
}

export default function DefaultLayout({children}: DefaultProviderProps) {
  
  return (
    <section className="px-[16px] pt-[12px]  md:pt-[24px] md:px-[50px]">
      {children}
    </section>
  )
}