import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  title: "Josep Sendra | Full-stack developer",
  description: "Josep Sendra is a Full-stack Developer and Freelancer. Let's make your ideal application.",
  keywords: "Josep Sendra, Full-stack developer, Freelancer, website, portfolio, application",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
