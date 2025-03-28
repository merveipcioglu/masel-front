import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SideDishCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center font-bold">
          YARDIMCI
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center px-4 gap-2 h-full">
          <div className="flex flex-col justify-between items-start gap-2 max-w-1/2 h-full">
            <p className="max-w-[275px] break-all">
              Tel Şehriyeli Pirinç Pilavı Pilavı Pilavı Pilavı Pilavı Pilavı
            </p>
            <p>180 kcal</p>
          </div>
          <div className="flex flex-col justify-between items-startgap-2 max-w-1/2 h-full">
            <p className="max-w-[275px] break-all">Sebzeli Bulgur</p>
            <p>220 kcal</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
