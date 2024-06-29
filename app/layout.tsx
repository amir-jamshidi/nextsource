import type { Metadata, Viewport } from "next";
import { Toaster } from 'react-hot-toast'
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContextProvider";

export const metadata: Metadata = {
  title: "نکست سورس | صفحه اصلی",
  description: "نکست سورس یک فروشگاه انلاین فروش سورس های مربوط به برنامه نویسی و کامپیوتر جهت ارتقای دانش دانشجویان می باشد که با هدف کمک به ادامه مسیر علاقه مندان به دنیای کد نویسی شروع به کار کرده است",
  icons: {
    icon: '/assets/logo.svg'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`dark`}>
      <body className="bg-background">
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
