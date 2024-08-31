import { ReactNode } from "react";
import { Familjen_Grotesk } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

type Props = {
  children: ReactNode;
};
const familjenGrotesk = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Tournated - Affordable White-Label Sports Management Software | Your Brand, Your Data | Free tournament software",
  description:
    "Launch your own custom sports management platform with Tournated. Our comprehensive, white-label software empowers you to manage sports organization, leagues, tournaments, clubs, events and athletes under your brand with full control over your data. Streamline sports events effortlessly.",
};
export default function RootLayout({ children }: Props) {
  return (
    <html lang={"en"}>
      <body className={familjenGrotesk.className}>{children}</body>
    </html>
  );
}
