

const Button = ({type="button", children}) => {
  return (
      <button type={type} className="py-4 px-auto bg-green-main rounded-[30px] font-bold text-[16px] md:text-[18px] leading-[150%] md:leading-[156%] text-white-main">{children}</button>
  )
}

export default Button