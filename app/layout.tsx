import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Setlist",
  description:
    "Create optimized setlists to elevate your live show performance. Plan the perfect flow from start to finish.",
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-background-01 text-foreground-01 ${font.className}`}>
        {children}
      </body>
    </html>
  );
}
