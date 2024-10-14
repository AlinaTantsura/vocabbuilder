const Dashboard = () => {
  return (
    <>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Find the word"
          className="w-full border border-[#121417]/[.1] rounded-[15px] pl-6 pr-14 py-3 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none"
        />
        <svg width={20} height={20} className="absolute top-[30%] right-6 fill-none stroke-black-main">
          <use href="/assets/icons/sprite.svg#icon-search"></use>
        </svg>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          placeholder="Find the word"
          className="w-full border border-[#121417]/[.1] rounded-[15px] pl-6 pr-14 py-3 font-normal text-[16px] leading-[150%] placeholder-black-main outline-none"
        />
        <svg width={20} height={20} className="absolute top-[30%] right-6">
          <use href="/assets/icons/sprite.svg#icon-d-mpr-toggle-2"></use>
        </svg>
      </div>
    </>
  );
};

export default Dashboard;
