const UserBar = () => {

    // User bar for desktop header
return (
    <div className="flex gap-2 md:gap-[28px] items-center">
      <h2 className="flex gap-[10px] md:gap-4 items-center text-[16px] md:text-[20px]">
        Alina
        <svg className="w-9 md:w-10 desk:w-12 h-9 md:h-10 desk:h-12 bg-green-main rounded-full p-[8px] desk:p-[12px]">
          <use href="/assets/icons/sprite.svg#icon-gridicons_user" />
        </svg>
      </h2>
        <button type="button" className="hidden desk:flex gap-1 items-center text-[16px] leading-[150%]">
            Log out
        <svg className="w-4 h-4 stroke-black-main">
          <use href="/assets/icons/sprite.svg#icon-switch-horizontal-01-1" />
        </svg>
        </button>
        <button type="button" className="desk:hidden">
        <svg className="w-8 h-8 stroke-black-main">
           <use href="/assets/icons/sprite.svg#icon-Nav" />
        </svg>
       </button>
    </div>
  );


    // User bar for the mobile 
//   return (
//     <div className="flex gap-2 items-center">
//       <h2>
//         Alina
//         <svg className="w-9 md:w-10 h-9 md:h-10 bg-green-main rounded-full p-[8px]">
//           <use href="/assets/icons/sprite.svg#icon-gridicons_user" />
//         </svg>
//       </h2>
//       <button type="button">
//         <svg className="w-8 stroke-black-main">
//           <use href="/assets/icons/sprite.svg#icon-Nav" />
//         </svg>
//       </button>
//     </div>
//   );
};

export default UserBar;
