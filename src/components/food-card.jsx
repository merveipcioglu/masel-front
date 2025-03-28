"use client";

import MainFoodCard from "./main-food-card";
import SoupCard from "./soup-card";
import SideDishCard from "./side-dish-card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function FoodCard() {
  // const [foodData, setFoodData] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const now = new Date();
  //     const date = now.toISOString().split("T")[0];
  //     const hour = now.getHours();
  //     const response = await axios.get(
  //       `http://3.208.25.214:8000/api/menu/?date=${date}&hour=${hour}`
  //     );
  //     setFoodData(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();

  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 2 * 60 * 60 * 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main className='flex flex-col h-4/6 items-center gap-12 justify-start w-full pt-12'>
      <div className='flex flex-col h-full lg:flex-row justify-between gap-4 2xl:gap-16 3xl:gap-32 w-full px-4 sm:px-8 lg:px-12 2xl:px-20'>
        <div className='flex h-full flex-col gap-12 3xl:gap-30 lg:pr-5 lg:w-1/2'>
          <SoupCard />
          <SideDishCard />
        </div>
        <div className='lg:pl-5 h-full lg:w-1/2'>
          <MainFoodCard />
        </div>
      </div>
    </main>
  );
}

