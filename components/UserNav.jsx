'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Cookies from "js-cookie";

const UserNav = () => {
  const path = usePathname();
  // const isLoggedIn = Cookies.get("token");
  // if (!isLoggedIn) return null;


  // Navigation for header
  return (
    <nav className="hidden desk:flex gap-[28px] items-center">
      <Link
        href="/dictionary"
        className={clsx(
          'text-[14px]',
          path === '/dictionary' &&
            'px-5 py-3 bg-green-main rounded-[15px] text-white-main'
        )}
      >
        Dictionary
      </Link>
      <Link
        href="/recommend"
        className={clsx(
          'text-[14px]',
          path === '/recommend' &&
            'px-5 py-3 bg-green-main rounded-[15px] text-white-main'
        )}
      >
        Recommend
      </Link>
      <Link
        href="/training"
        className={clsx(
          'text-[14px]',
          path === '/training' &&
            'px-5 py-3 bg-green-main rounded-[15px] text-white-main'
        )}
      >
        Training
      </Link>
    </nav>
  );
};

export default UserNav;
