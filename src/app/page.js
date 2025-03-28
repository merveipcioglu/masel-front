import Image from "next/image";
import FoodCard from "@/components/food-card";
export default function Home() {
  return (
    <div className="  w-full  flex items-center justify-center ">
      <FoodCard />
    </div>
  );
}
