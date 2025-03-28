import "./globals.css";
import { Amarante, Marcellus_SC } from "next/font/google";

export const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
});
export const metadata = {
  title: "Masel Catering",
  description: "Günlük Yemek Menüsü",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="bg-[url('/arkaa_plan.png')] min-h-screen bg-cover bg-no-repeat bg-center relative">
        {children}
      </body>
    </html>
  );
}

