'use client'

import { useForm } from "react-hook-form";
import Button from "./Button"


const LoginForm = () => {
    const { register } = useForm();

  return (
    <form className="flex flex-col gap-[14px]">

      <input {...register("email")} placeholder="Email" className="border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main" />

      <div className="relative mb-[18px] md:mb-[14px]">
      <input type="password" {...register("password")} placeholder="Password" className="w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main" />
        <svg width="20" height="20" className="absolute right-4 md:right-[18px] top-[35%] fill-transparent stroke-black-main">
          <use href="/assets/icons/sprite.svg#icon-eye-off" />
      </svg>
      </div>

      <Button type="submit">Login</Button>
    </form>
  )
}

export default LoginForm