import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function SoupCard({ soups = [] }) {
  return (
    <Card className='bg-card-gradient h-full rounded-t-[20px] rounded-b-[4px] text-card-color px-4 sm:px-6 lg:px-8 pb-0 border-gradient relative'>
      <CardHeader className='p-0 pt-2 sm:pt-3 lg:pt-4 2xl:pt-5 3xl:pt-6 4xl:pt-8'>
        <CardTitle className='text-center'>
          <h2 className='font-amarante text-[20px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]'>
            ÇORBA
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0 h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] lg:h-[calc(100%-4.5rem)] 2xl:h-[calc(100%-6rem)] 3xl:h-[calc(100%-7rem)] 4xl:h-[calc(100%-9rem)]'>
        <div className='flex flex-col w-full h-full'>
          <div className='flex flex-col sm:flex-row justify-between w-full h-full gap-4 sm:gap-5'>
            {soups.map((soup, index) => (
              <div
                key={index}
                className={`${
                  index < 2 ? "sm:w-1/2" : "w-full"
                } flex flex-col justify-start items-start px-2 sm:px-4`}
              >
                <p className='mb-1 sm:mb-2 pb-2 sm:pb-4 font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]'>
                  {soup.name}
                </p>
                <p className='font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]'>
                  {soup.calories}{" "}
                  <span className='font-Monserrat-medium text-[10px] sm:text-[12px] lg:text-[14px] 2xl:text-[36px] 3xl:text-[48px] 4xl:text-[66px]'>
                    kcal
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <Image
        src='/small-pic/soup.svg'
        alt='çorba_food'
        width={106}
        height={96}
        className='absolute -bottom-10 -right-10 w-[70px] h-[60px] sm:w-[90px] sm:h-[80px] 2xl:w-[106px] 2xl:h-[96px]'
      />
    </Card>
  );
}

