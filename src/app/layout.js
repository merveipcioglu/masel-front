import "./globals.css";

export const metadata = {
  title: "Masel Catering",
  description: "Günlük Yemek Menüsü",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <body className="bg-[url('/arka_plan.svg')] min-h-screen bg-cover bg-no-repeat bg-center bg-fixed relative">
        {children}
      </body>
    </html>
  );
}

