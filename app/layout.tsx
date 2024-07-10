import React from "react";
import "../styles/globals.css";
import RecoilProvider from "./components/RecoilProvider";

export const metadata = {
  title: "토크키트",
  description: "토크키트입니다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilProvider>{children}</RecoilProvider>
      </body>
    </html>
  );
}
