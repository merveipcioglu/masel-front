import Image from "next/image";
import FoodCard from "@/components/food-card";
export default function Home() {
  return (
    <div className=' h-full  w-full inset-0 z-10 flex items-center justify-center '>
      <FoodCard />
    </div>
  );
}

