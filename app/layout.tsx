import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContextProvider";

export const metadata: Metadata = {
  title: "نکست سورس | صفحه اصلی",
  description: "نکست سورس یک فروشگاه انلاین فروش سورس های مربوط به برنامه نویسی و کامپیوتر جهت ارتقای دانش دانشجویان می باشد که با هدف کمک به ادامه مسیر علاقه مندان به دنیای کد نویسی شروع به کار کرده است",
  icons: {
    icon: '/assets/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`dark`}>
      <body className="bg-background min-h-screen">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
