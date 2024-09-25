'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";
import { loginUser } from "@/utils/auth";

const RegisterForm = () => {
  const router = useRouter();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    }

    try {
     const response = await fetch("/api/users/register", {
       method: "POST",
       headers: {
         "Content-type": "application/json"},
        body: JSON.stringify(data)
     })
      
      if (response.ok) {
        const result = await loginUser(data)
        console.log("This is register", result)
        // if(result.ok) router.push('/dictionary');
      }
    }
    catch (err) {
      console.log(err.message)
    }
  }

  return (
    <form className="flex flex-col gap-[14px]" onSubmit={handleRegisterSubmit}>
        <input name="name" placeholder="Name" className="border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main" />

      <input name="email" placeholder="Email" className="border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main" />

      <div className="relative mb-[18px] md:mb-[14px]">
      <input type="password" name="password" placeholder="Password" className="w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main" />
        <svg width="20" height="20" className="absolute right-4 md:right-[18px] top-[35%] fill-transparent stroke-black-main">
          <use href="/assets/icons/sprite.svg#icon-eye-off" />
      </svg>
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
