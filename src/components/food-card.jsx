"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";

export default function FoodCard() {
  return (
    <main className="flex flex-col gap-[32px] h-fullrow-start-2 items-center sm:items-start">
      <div className="flex flex-col gap-1 w-full justify-center h-full items-center">
        <h4>27.03.2025</h4>
        <h1>Öğlen Yemeği Menüsü</h1>
      </div>

      <div className="grid grid-cols-12 gap-8 h-fullw-full ">
        <div className="col-span-6 flex flex-col gap-8  p-6  ">
          <SoupCard />
          <SideDishCard />
        </div>
        <div className="col-span-6  p-6  h-full">
          <MainFoodCard />
        </div>
      </div>
    </main>
  );
}
