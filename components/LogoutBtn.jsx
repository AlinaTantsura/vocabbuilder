'use client'
import Cookies from 'js-cookie';

import { useRouter } from "next/navigation"

const LogoutBtn = () => {
    const router = useRouter();
    const handleLogout = async () => {
        const token = Cookies.get("token")
        
        try {
             await fetch("/api/users/logout", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            Cookies.remove("token")
            router.replace("/login")
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <button type="button" onClick={handleLogout} className="hidden desk:flex gap-1 items-center text-[16px] leading-[150%]">
            Log out
        <svg className="w-4 h-4 stroke-black-main">
          <use href="/assets/icons/sprite.svg#icon-switch-horizontal-01-1" />
        </svg>
        </button>
  )
}

export default LogoutBtn