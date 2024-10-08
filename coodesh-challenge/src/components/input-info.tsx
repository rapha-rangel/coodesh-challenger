interface InputInfoProps {
  inputValue: string
  setInputValue: (value: string)=> void
  type: string
  placeholder: string
  label: string
}

export default function InputInfo ({inputValue,setInputValue, type, placeholder,label}: InputInfoProps) {

  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value);
  } 
  return (
    <label className={`transition-all duration-250 delay-0 w-full text-white text-xl flex flex-col gap-1
    ${label ==="email"||label ==="password"?"w-[300px]":"w-full"}`}>
      {label}
      <input 
        required
        type={type} 
        placeholder={placeholder} 
        onChange={(e)=> handleChange(e)}
        value={inputValue}
        className="placeholder:text-[#c1c1ca] placeholder:font-light outline-none bg-[#62626C] w-[252px] px-[20px] py-[9px] text-subtitleFontSize w-full
          shadow-[inset_0px_4px_4px_0px_#00000040] rounded-[10px] text-subtitleLineHeight font-light text-white"/>
    </label>
  )
}