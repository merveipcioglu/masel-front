import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MainFoodCard() {
  return (
    <Card className="relative bg-black text-white">
      <CardHeader>
        <CardTitle className="text-center text-4xl font-bold">
          ANA YEMEK
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-8 px-4 mb-20">
          <div className="flex justify-between w-full">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="mb-2 break-words max-w-1/2">
                Körili Mantarlı Tavuk
              </p>
              <p>300 kcal</p>
            </div>

            <div className="flex flex-col justify-between items-start gap-2">
              <p className="mb-2 break-words max-w-2/3">
                Karışık Kış Sebze Kızartma
              </p>
              <p>220 kcal</p>
            </div>
          </div>

          <div className="flex justify-between w-full ">
            <div className="flex flex-col justify-between items-start gap-2">
              <p className="mb-2 break-words max-w-2/3">
                Pastırmalı Kuru Fasülye
              </p>
              <p className="">360 kcal</p>
            </div>

            <div className="flex flex-col justify-between items-start gap-2">
              <p className="mb-2 break-words max-w-2/3">Mantı</p>
              <p className="">400 kcal</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
