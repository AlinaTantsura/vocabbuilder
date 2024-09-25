'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { connectToDB } from '@/utils/database';
import { signIn, signOut } from 'next-auth/react';
import { loginUser } from '@/utils/auth';

const LoginForm = () => {
  const router = useRouter();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    
    const data = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    
    try {
      const result = await loginUser(data);
      console.log("This is login", result.user.token);
      if(result.ok) router.push('/dictionary');
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <form onSubmit={handleLoginSubmit} className="flex flex-col gap-[14px]">
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main"
      />

      <div className="relative mb-[18px] md:mb-[14px]">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main"
        />
        <svg
          width="20"
          height="20"
          className="absolute right-4 md:right-[18px] top-[35%] fill-transparent stroke-black-main"
        >
          <use href="/assets/icons/sprite.svg#icon-eye-off" />
        </svg>
      </div>

      <Button type="submit">Login</Button>
      <Button type="button" onClick={()=>signOut()}>Logout</Button>
    </form>
  );
};

export default LoginForm;
