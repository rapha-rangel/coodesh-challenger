import DisplayFavoritesRadios from "./display-favorites-radios";

export default function Main() {

  return(
    <section className="pl-[30px] md:-translate-y-6">
      <p className="text-white uppercase text-subtitleFontSize leading-subtitleLineHeight font-light mb-1 md:mb-[23px]">Favorite Radios</p>
      <DisplayFavoritesRadios/>
    </section>
  )
}