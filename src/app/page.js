import Image from "next/image";
import FoodCard from "@/components/food-card";
export default function Home() {
  return (
    <div className=" min-h-screen bg-[url('/arka_plan.svg')] bg-cover bg-no-repeat bg-center bg-fixed flex justify-center items-center flex-col ">
      <FoodCard />
    </div>
  );
}
