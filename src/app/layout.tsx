import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "BlissBurn - Premium Bakery",
  description: "Baking Happiness Daily - Premium breads, snacks, buns, and cookies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          @font-face {
            font-family: 'Helvetica Condensed';
            src: local('Helvetica Neue Condensed Bold'),
                 local('HelveticaNeue-CondensedBold'),
                 local('Arial-BoldMT');
            font-weight: bold;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className={`${pacifico.variable} font-helvetica bg-cream`}>
        <div className="bg-dots-pattern bg-[length:20px_20px]">
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
