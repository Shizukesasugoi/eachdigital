import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./Provider";


const inter = localFont({
  src: "sui-generis-free.rg-regular.otf",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EACH",
  description: "EACH bridges gaps in the social and wellness atmospheres.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>{children}</Providers>
        <script >
          AOS.init();
</script>
        
      </body>
    </html>
  );
}
