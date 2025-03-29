"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FoodCard() {
  const [foodData, setFoodData] = useState([]);

  const fetchData = async () => {
    try {
      const now = new Date();
      const date = now.toISOString().split("T")[0];
      const hour = now.getHours();
      const response = await axios.get(
        `http://3.208.25.214:8000/api/menu/?date=2025-03-28&hour=${hour}`
      );
      setFoodData(response.data.menu);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 2 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex flex-col h-auto min-h-[60vh] lg:min-h-[70vh] max-h-screen items-center gap-6 lg:gap-8 2xl:gap-12 3xl:gap-16 4xl:gap-20 justify-start w-full'>
      <div className='flex flex-col h-full lg:flex-row justify-between gap-4 2xl:gap-16 3xl:gap-32 w-full px-4 sm:px-8 lg:px-12 2xl:px-20'>
        <div className='flex h-full flex-col gap-6 lg:gap-8 2xl:gap-12 3xl:gap-16 4xl:gap-20 lg:pr-5 lg:w-1/2'>
          <div className='h-[calc(50%-0.75rem)] lg:h-[calc(50%-1rem)] 2xl:h-[calc(50%-1.25rem)] 3xl:h-[calc(50%-1.5rem)] 4xl:h-[calc(50%-2rem)]'>
            <SoupCard soups={foodData?.soups} />
          </div>
          <div className='h-[calc(50%-0.75rem)] lg:h-[calc(50%-1rem)] 2xl:h-[calc(50%-1.25rem)] 3xl:h-[calc(50%-1.5rem)] 4xl:h-[calc(50%-2rem)]'>
            <SideDishCard sideDishes={foodData?.side_dishes} />
          </div>
        </div>
        <div className='lg:pl-5 h-full lg:w-1/2'>
          <MainFoodCard mainDishes={foodData?.main_dishes} />
        </div>
      </div>
    </main>
  );
}

