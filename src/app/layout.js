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
      <link rel='preconnect' href='https://fonts.googleapis.com'></link>
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossorigin
      ></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap'
        rel='stylesheet'
      ></link>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <body className="bg-[url('/arka_plan.svg')] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed relative ">
        {children}
      </body>
    </html>
  );
}

