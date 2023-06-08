import "./globals.css";
import { Noto_Serif_KR } from "next/font/google";
import "next/head";
import "next/link";

const inter = Noto_Serif_KR({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "Nicolas & Yubeen",
  description: "made by Yubeen and Tormod",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <script
          type="text/javascript"
          src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=6d5bd433c358c1c3235073544f0ffb7f"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
