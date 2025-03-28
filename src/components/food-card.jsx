"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";

export default function FoodCard() {
  return (
    <main className='flex flex-col items-center px-20 pt-10 gap-20 justify-start w-full h-screen'>
      <div className='flex flex-col w-full justify-start items-center text-center text-card-color '>
        <h4 className='font-futura 2xl:text-[48px] text-[12px]'>27.02.2025</h4>
        <h1 className='font-Marcel  2xl:text-[144px] text-[36px]'>
          Öğle Yemeğ
          <span className='font-amarante 2xl:text-[72px] text-[24px] text-[144px]'>
            i
          </span>{" "}
          Menüsü
        </h1>
      </div>
      <div className='grid grid-cols-12 gap-8 w-full grid-rows-18  '>
        <div className='col-span-6 row-span-18 h-full flex flex-col gap-12 pr-5'>
          <SoupCard />
          <SideDishCard />
        </div>
        <div className='col-span-6 row-span-18 h-full pl-5'>
          <MainFoodCard />
        </div>
      </div>
    </main>
  );
}

