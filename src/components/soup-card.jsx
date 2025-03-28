import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SoupCard() {
  return (
    <Card className="bg-card-gradient h-full rounded-t-[20px] rounded-b-[4px] text-card-color px-8 pb-0 ">
      <CardHeader>
        <CardTitle className="text-2xl text-center font-bold">ÇORBA</CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-full">
        <div className="grid grid-cols-12 w-full h-full ">
          <div className="col-span-12 flex justify-between w-full h-full gap-5">
            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start ">
              <p className="mb-1 row-span-1 sm:mb-2 pb-4 font-Montserrat text-xl">
                Naneli Yoğurt Çorbası
              </p>
              <p className="row-span-1 text-xl font-Montserrat-bold">
                300 kcal
              </p>
            </div>

            <div className="col-span-6 grid grid-rows-2 justify-start w-full items-start  ">
              <p className="mb-1 row-span-1 sm:mb-2 font-Montserrat text-xl">
                Süzme Mercimek Çorbası
              </p>
              <p className="row-span-1 text-xl font-Montserrat-bold">
                270 kcal
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
