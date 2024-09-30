'use client';

import { useRouter } from 'next/navigation';
import Button from './Button';
import { loginUser } from '@/utils/auth';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState({});
  const [isPass, setIsPass] = useState(true);

  const isValidData = ({ name, email, password }) => {
    const newErrors = {};
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordPattern = /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/;
    let isValid = true;

    if (name.length < 2) {
      newErrors.name = 'Name must have at least 2 characters';
      isValid = false;
    }
    if (email === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (email !== '' && !emailPattern.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (password === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }
    if (password !== '' && !passwordPattern.test(password)) {
      newErrors.password = 'Password must be 7 characters long, containing 6 letters and 1 number';
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    if (!isValidData(data)) return;

    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await loginUser(data);
        if (result.ok) {
          toast(`Hello, ${result.data.user.name}`)
          router.replace('/dictionary')
        }
        else {
        const responseError = await result.text();
        toast(JSON.parse(responseError));
      };
      } else {
        const responseError = await response.text();
        toast(JSON.parse(responseError));
      }
    } catch (err) {
      toast(err.message);
    }
  };
  return (
    <form className="flex flex-col gap-[14px]" onSubmit={handleRegisterSubmit}>
      <div className="">
        <input
          name="name"
          placeholder="Name"
          className={clsx(
            'w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main',
            error.name && 'border-[#d80027]'
          )}
        />
        {error.name && (
          <p className="flex gap-1 items-center font-normal text-[12px] leading-[150%] tracking-[0.01em] text-[#d80027]">
            <svg className="w-4 h-4">
              <use href="/assets/icons/sprite.svg#icon-error-warning-fill"></use>
            </svg>
            {error.name}
          </p>
        )}
      </div>
      <div>
        <input
          name="email"
          placeholder="Email"
          className={clsx(
            'w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main',
            error.email && 'border-[#d80027]'
          )}
        />
        {error.email && (
          <p className="flex gap-1 items-center font-normal text-[12px] leading-[150%] tracking-[0.01em] text-[#d80027]">
            <svg className="w-4 h-4">
              <use href="/assets/icons/sprite.svg#icon-error-warning-fill"></use>
            </svg>
            {error.email}
          </p>
        )}
      </div>
      <div className="relative mb-[18px] md:mb-[14px]">
        <input
          type={isPass ? 'password' : 'text'}
          name="password"
          placeholder="Password"
          className={clsx(
            'w-full border border-[#121417]/[.1] rounded-[15px] px-[18px] py-4 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none hover:border-green-main focus:border-green-main',
            error.email && 'border-[#d80027]'
          )}
        />
        <svg
          onClick={() => setIsPass(!isPass)}
          width="20"
          height="20"
          className="absolute right-4 md:right-[18px] top-[18px] fill-transparent stroke-black-main"
        >
          {isPass ? (
            <use href="/assets/icons/sprite.svg#icon-eye-off" />
          ) : (
            <use href="/assets/icons/sprite.svg#icon-eye" />
          )}
        </svg>
        {error.password && (
          <p className="flex gap-1 items-center font-normal text-[12px] leading-[150%] tracking-[0.01em] text-[#d80027]">
            <svg className="w-4 h-4">
              <use href="/assets/icons/sprite.svg#icon-error-warning-fill"></use>
            </svg>
            {error.password}
          </p>
        )}
      </div>

      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
