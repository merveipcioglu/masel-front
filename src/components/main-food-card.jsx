import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MainFoodCard() {
  return (
    <Card className="relative bg-card-gradient text-card-color px-8 h-full rounded-t-[20px] rounded-b-[4px] pb-0">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-center text-3xl sm:text-4xl font-bold">
          ANA YEMEK
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-12 w-full h-full ">
          <div className="col-span-12 flex justify-between w-full h-full gap-5">
            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start px-4">
              <p className="mb-1 row-span-1 sm:mb-2 font-Montserrat text-xl">
                Körili Mantarlı Tavuk
              </p>
              <p className="row-span-1 text-xl font-Montserrat-bold">
                300 kcal
              </p>
            </div>

            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start px-4 ">
              <p className="mb-1 row-span-1 sm:mb-2 font-Montserrat text-xl">
                Karışık Kış Sebze Kızartma
              </p>
              <p className="row-span-1 text-xl font-Montserrat-bold">
                270 kcal
              </p>
            </div>
          </div>
          <div className="col-span-12  flex  w-full h-full gap-5 justify-between">
            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start px-4">
              <p className="mb-1 row-span-1 sm:mb-2 font-Montserrat text-xl">
                Pastırmalı Kuru Fasülye
              </p>
              <p className="row-span-1 text-xl font-Montserrat-bold">
                360 kcal
              </p>
            </div>

            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start px-4">
              <p className="mb-1 row-span-1 sm:mb-2 font-Montserrat text-xl">
                Mantı
              </p>
              <p className="text-xl  row-span-1 font-Montserrat-bold">
                400 kcal
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
