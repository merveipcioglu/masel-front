"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";

export default function FoodCard() {
  return (
    <main className='flex flex-col items-center gap-12 justify-start w-full pt-12'>
      <div className='flex flex-col w-full justify-start items-center text-center text-card-color pb-24'>
        <h4 className='font-futura text-[12px] sm:text-[16px] md:text-[20px] lg:text-[30px] 2xl:text-[40px]'>
          27.02.2025
        </h4>
        <h1 className='font-Marcel text-[36px] sm:text-[42px] md:text-[48px] lg:text-[60px] 2xl:text-[120px]'>
          Öğle Yemeğ
          <span className='font-amarante text-[36px] sm:text-[42px] md:text-[48px] lg:text-[60px] 2xl:text-[120px] font-Playfair-display'>
            i
          </span>{" "}
          Menüsü
        </h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-12 lg:gap-16 gap-4 w-full px-4 sm:px-8 md:px-12 lg:px-20'>
        <div className='col-span-1 md:col-span-6 flex flex-col gap-2 md:gap-30 md:pr-5'>
          <SoupCard />
          <SideDishCard />
        </div>
        <div className='col-span-1 md:col-span-6 md:pl-5'>
          <MainFoodCard />
        </div>
      </div>
    </main>
  );
}

