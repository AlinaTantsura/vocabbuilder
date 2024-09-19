import Link from 'next/link';
import UserBar from './UserBar';
import UserNav from './UserNav';
// import sprite from "/assets/icons/sprite.svg"

const Home = () => {
  return (
    <header className="p-4 md:py-6 md:px-8 xl:px-[100px] flex justify-between">
      <Link
        href="/"
        className="flex gap-4 items-center font-semibold text-[18px] md:text-[22px] leading-[133%] md:leading-[145%]"
      >
        <svg className="w-9 md:w-10 h-9 md:h-10 bg-green-main rounded-full p-[6px]">
          <use href="/assets/icons/sprite.svg#icon-UnionLogo" />
        </svg>
        VocabBuilder
      </Link>
      <UserNav />
      <UserBar />
    </header>
  );
};

export default Home;
