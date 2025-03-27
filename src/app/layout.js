import "./globals.css";

export const metadata = {
  title: "Masel Catering",
  description: "Günlük Yemek Menüsü",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}

