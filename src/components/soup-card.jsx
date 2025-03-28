import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SoupCard() {
  return (
    <>
      <Card className='bg-card-gradient h-full rounded-t-[20px] rounded-b-[4px] text-card-color px-4 sm:px-6 md:px-8 pb-0 border-gradient relative'>
        <CardHeader className='p-0'>
          <CardTitle className='text-center'>
            <h2 className='font-amarante text-[20px] sm:text-[24px] md:text-[36px] lg:text-[48px] 2xl:text-[54px]'>
              ÇORBA
            </h2>
          </CardTitle>
        </CardHeader>
        <CardContent className='p-0 h-full'>
          <div className='grid grid-cols-1 sm:grid-cols-12 w-full h-full'>
            <div className='col-span-1 sm:col-span-12 flex flex-col sm:flex-row justify-between w-full h-full gap-4 sm:gap-5'>
              <div className='sm:col-span-6 grid grid-rows-2 justify-start w-full items-start px-2 sm:px-4'>
                <p className='mb-1 row-span-1 sm:mb-2 pb-2 sm:pb-4 font-Montserrat text-[14px] sm:text-[15px] md:text-[18px] lg:text-[24px] 2xl:text-[54px]'>
                  Naneli Yoğurt Çorbası
                </p>
                <p className='row-span-1 font-Montserrat text-[14px] sm:text-[15px] md:text-[18px] lg:text-[24px] 2xl:text-[54px]'>
                  300{" "}
                  <span className='font-Monserrat-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] 2xl:text-[48px]'>
                    kcal
                  </span>
                </p>
              </div>

              <div className='sm:col-span-6 grid grid-rows-2 justify-start w-full items-start px-2 sm:px-4'>
                <p className='mb-1 row-span-1 sm:mb-2 font-Montserrat text-[14px] sm:text-[15px] md:text-[18px] lg:text-[24px] 2xl:text-[54px]'>
                  Süzme Mercimek Çorbası
                </p>
                <p className='row-span-1 font-Montserrat text-[14px] sm:text-[15px] md:text-[18px] lg:text-[24px] 2xl:text-[54px]'>
                  270{" "}
                  <span className='font-Monserrat-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[18px] 2xl:text-[48px]'>
                    kcal
                  </span>
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <Image
          src='/çorba.svg'
          alt='çorba_food'
          width={106}
          height={96}
          className='absolute -bottom-10 -right-10 w-[70px] h-[60px] sm:w-[90px] sm:h-[80px] lg:w-[106px] lg:h-[96px]'
        />
      </Card>
    </>
  );
}

