import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SideDishCard({ sideDishes = [] }) {
  return (
    <Card className='bg-card-gradient h-full rounded-t-[20px] rounded-b-[4px] text-card-color px-4 sm:px-6 lg:px-8 pb-0 border-gradient relative'>
      <CardHeader className='p-0 pt-2 sm:pt-3 lg:pt-4 2xl:pt-5 3xl:pt-6 4xl:pt-8'>
        <CardTitle className='text-center'>
          <h2 className='font-amarante text-[20px] sm:text-[48px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]'>
            YARDIMCI
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0 h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] lg:h-[calc(100%-4.5rem)] 2xl:h-[calc(100%-6rem)] 3xl:h-[calc(100%-7rem)] 4xl:h-[calc(100%-9rem)]'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex flex-col sm:flex-row justify-between w-full h-full gap-4 sm:gap-5'>
            {sideDishes.map((dish, index) => (
              <div
                key={index}
                className={`${
                  index < 2 ? "sm:w-1/2" : "w-full"
                } flex flex-col justify-evenly items-start px-2 sm:px-4`}
              >
                <p className='mb-1 sm:mb-2 font-Montserrat text-[14px] sm:text-[15px] lg:text-[24px] 2xl:text-[32px] 3xl:text-[48px] 4xl:text-[54px]'>
                  {dish.name}
                </p>
                <p className='font-Montserrat text-[14px] sm:text-[15px] lg:text-[24px] 2xl:text-[32px] 3xl:text-[48px] 4xl:text-[54px]'>
                  {dish.calories}{" "}
                  <span className='font-Monserrat-medium text-[10px] sm:text-[12px] lg:text-[16px] 2xl:text-[24px] 3xl:text-[36px] 4xl:text-[48px]'>
                    kcal
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <Image
        src='/small-pic/side.svg'
        alt='yardımcı_food'
        width={133}
        height={84}
        className='absolute -bottom-10 -right-10 w-[80px] h-[50px] sm:w-[100px] sm:h-[60px] 2xl:w-[133px] 2xl:h-[84px]'
      />
    </Card>
  );
}

