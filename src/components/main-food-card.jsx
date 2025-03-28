import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MainFoodCard({ mainDishes = [] }) {
  return (
    <Card className="relative bg-card-gradient text-card-color px-4 sm:px-6 lg:px-8 h-full rounded-t-[20px] rounded-b-[4px] pb-0 border-gradient">
      <CardHeader className="p-0 pt-2 sm:pt-3 lg:pt-4 2xl:pt-5 3xl:pt-6 4xl:pt-8">
        <CardTitle className="text-center">
          <h2 className="font-amarante text-[20px] sm:text-[24px] lg:text-[36px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]">
            ANA YEMEK
          </h2>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 h-[calc(100%-3rem)] sm:h-[calc(100%-3.5rem)] lg:h-[calc(100%-4.5rem)] 2xl:h-[calc(100%-6rem)] 3xl:h-[calc(100%-7rem)] 4xl:h-[calc(100%-9rem)]">
        <div className="flex flex-col w-full h-full gap-6">
          {mainDishes.length > 0 && (
            <>
              <div className="flex flex-col sm:flex-row justify-between w-full h-full gap-4 sm:gap-5">
                {mainDishes.slice(0, 2).map((dish, index) => (
                  <div
                    key={index}
                    className="sm:w-1/2 flex flex-col justify-start items-start px-2 sm:px-4"
                  >
                    <p className="mb-1 sm:mb-2 font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]">
                      {dish.name}
                    </p>
                    <p className="font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]">
                      {dish.calories}{" "}
                      <span className="font-Monserrat-medium text-[10px] sm:text-[12px] lg:text-[14px] 2xl:text-[36px] 3xl:text-[48px] 4xl:text-[66px]">
                        kcal
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {mainDishes.length > 2 && (
                <div className="flex flex-col sm:flex-row justify-between w-full h-full gap-4 sm:gap-5">
                  {mainDishes.slice(2, 4).map((dish, index) => (
                    <div
                      key={index}
                      className="sm:w-1/2 flex flex-col justify-start items-start px-2 sm:px-4"
                    >
                      <p className="mb-1 sm:mb-2 font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]">
                        {dish.name}
                      </p>
                      <p className="font-Montserrat text-[14px] sm:text-[15px] lg:text-[18px] 2xl:text-[48px] 3xl:text-[54px] 4xl:text-[72px]">
                        {dish.calories}{" "}
                        <span className="font-Monserrat-medium text-[10px] sm:text-[12px] lg:text-[14px] 2xl:text-[36px] 3xl:text-[48px] 4xl:text-[66px]">
                          kcal
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
        <Image
          src="/ana_yemek.svg"
          alt="food"
          width={131}
          height={92}
          className="absolute -bottom-10 -right-10 w-[80px] h-[60px] sm:w-[100px] sm:h-[70px] 2xl:w-[131px] 2xl:h-[92px]"
        />
      </CardContent>
    </Card>
  );
}
