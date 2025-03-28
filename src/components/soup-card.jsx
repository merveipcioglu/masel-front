import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SoupCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-center font-bold">ÇORBA</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center px-4 gap-2">
          <div className="flex flex-col justify-between items-start gap-2">
            <p>Naneli Yoğurt Çorbası</p>
            <p>180 kcal</p>
          </div>
          <div className="flex flex-col justify-between items-start gap-2">
            <p>Süzme Mercimek Çorbası</p>
            <p>220 kcal</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
