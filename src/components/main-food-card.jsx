import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MainFoodCard() {
  return (
    <Card className='relative bg-black text-white p-4 sm:p-6 h-full'>
      <CardHeader className='p-0 mb-4'>
        <CardTitle className='text-center text-3xl sm:text-4xl font-bold'>
          ANA YEMEK
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <div className='flex flex-col gap-6 sm:gap-8 px-2 sm:px-4 '>
          <div className='flex justify-between w-full gap-4'>
            <div className='flex flex-col justify-start items-start gap-2 flex-1'>
              <p className='mb-1 sm:mb-2 font-medium'>Körili Mantarlı Tavuk</p>
              <p className='text-sm text-gray-300'>300 kcal</p>
            </div>

            <div className='flex flex-col justify-start items-start gap-2 flex-1'>
              <p className='mb-1 sm:mb-2 font-medium'>
                Karışık Kış Sebze Kızartma
              </p>
              <p className='text-sm text-gray-300'>270 kcal</p>
            </div>
          </div>
          <div className='flex justify-between w-full gap-4'>
            <div className='flex flex-col justify-start items-start gap-2 flex-1'>
              <p className='mb-1 sm:mb-2 font-medium'>
                Pastırmalı Kuru Fasülye
              </p>
              <p className='text-sm text-gray-300'>360 kcal</p>
            </div>

            <div className='flex flex-col justify-start items-start gap-2 flex-1'>
              <p className='mb-1 sm:mb-2 font-medium'>Mantı</p>
              <p className='text-sm text-gray-300'>400 kcal</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

