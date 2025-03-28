import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SideDishCard() {
  return (
    <Card className='bg-card-gradient h-full rounded-t-[20px] rounded-b-[4px] text-card-color px-8 pb-0 border-gradient relative'>
      <CardHeader>
        <CardTitle className='text-center'>
          <h2 className='font-amarante 2xl:text-[72px] text-[24px]'>
            YARDIMCI
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0 h-full'>
        <div className='grid grid-cols-12 w-full h-full '>
          <div className='col-span-12 flex justify-between w-full h-full gap-5'>
            <div className='col-span-6 grid grid-rows-2 justify-start w-full items-start px-4'>
              <p className='mb-1 row-span-1 sm:mb-2 font-Montserrat   2xl:text-[60px] text-[15px] text-xl'>
                Körili Mantarlı Tavuk
              </p>
              <p className='row-span-1 text-xl font-Montserrat   2xl:text-[60px] text-[15px]-bold   2xl:text-[60px] text-[15px]'>
                300{" "}
                <span className='font-Monserrat-medium text-[12px] 2xl:text-[48px]'>
                  kcal
                </span>
              </p>
            </div>

            <div className='col-span-6 grid grid-rows-2 justify-start w-full items-start px-4 '>
              <p className='mb-1 row-span-1 sm:mb-2 font-Montserrat   2xl:text-[60px] text-[15px] text-xl'>
                Karışık Kış Sebze Kızartma
              </p>
              <p className='row-span-1 text-xl font-Montserrat   2xl:text-[60px] text-[15px]-bold   2xl:text-[60px] text-[15px]'>
                270{" "}
                <span className='font-Monserrat-medium text-[12px] 2xl:text-[48px]'>
                  kcal
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <Image
        src='/yardımcı.svg'
        alt='yardımcı_food'
        width={133}
        height={84}
        className='absolute -bottom-10 -right-10'
      />
    </Card>
  );
}

