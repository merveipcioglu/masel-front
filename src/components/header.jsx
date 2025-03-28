import React from "react";

function Header() {
  return (
    <div className='flex flex-col w-full h-1/6 justify-start items-center text-center text-card-color 3xl:pb-12'>
      <h4 className='font-futura text-[12px] sm:text-[16px] lg:text-[20px] 2xl:text-[30px] 3xl:text-[40px]'>
        {new Date().toLocaleDateString("tr-TR")} {/* Display current date */}
      </h4>
      <h1 className='font-Marcel text-[36px] sm:text-[42px] lg:text-[48px] 2xl:text-[60px] 3xl:text-[120px]'>
        Öğle Yemeğ
        <span className='font-amarante text-[36px] sm:text-[42px] lg:text-[48px] 2xl:text-[60px] 3xl:text-[120px] font-Playfair-display'>
          i
        </span>{" "}
        Menüsü
      </h1>
    </div>
  );
}

export default Header;

