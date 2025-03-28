import Image from "next/image";
import FoodCard from "@/components/food-card";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-between h-screen overflow-hidden">
      <Header className="h-[15vh] lg:h-[12vh] 2xl:h-[10vh] 3xl:h-[8vh] 4xl:h-[6vh]" />
      <FoodCard />
      <Footer className="h-[8vh] lg:h-[7vh] 2xl:h-[6vh] 3xl:h-[5vh] 4xl:h-[4vh]" />
    </div>
  );
}
