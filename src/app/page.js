import Image from "next/image";
import FoodCard from "@/components/food-card";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center 3xl:justify-between h-screen'>
      <Header />
      <FoodCard />
      <Footer />
    </div>
  );
}

