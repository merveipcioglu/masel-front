"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";

export default function FoodCard() {
  return (
    <main className='flex flex-col items-center justify-around w-full max-w-5xl min-h-screen pb-24'>
      <div className='flex flex-col gap-1 w-full justify-center items-center text-center text-white'>
        <h4 className='text-lg font-semibold'>27.02.2025</h4>
        <h1 className='text-3xl sm:text-4xl font-bold'>ÖĞLE YEMEĞİ MENÜSÜ</h1>
      </div>
      <div className='grid grid-cols-12 gap-8 w-full grid-rows-18'>
        <div className='col-span-6 row-span-18 h-full flex flex-col gap-13 pr-5'>
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

