import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SoupCard() {
  return (
    <Card className='bg-white/90 backdrop-blur-sm h-full'>
      <CardHeader>
        <CardTitle className='text-2xl text-center font-bold text-gray-800'>
          ÇORBA
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex justify-around items-center'>
          <div className='flex flex-col justify-start w-full items-start gap-2 h-full'>
            <p className='font-medium text-gray-700'>Naneli Yoğurt Çorbası</p>
            <p className='text-sm text-gray-600'>180 kcal</p>
          </div>
          <div className='flex items-center w-full gap-3'>
            <div className='flex flex-col justify-start items-start gap-2 h-full'>
              <p className='font-medium text-gray-700'>
                Süzme Mercimek Çorbası
              </p>
              <p className='text-sm text-gray-600'>220 kcal</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

