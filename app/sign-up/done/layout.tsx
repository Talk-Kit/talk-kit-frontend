import React from "react";

export const metadata = {
  title: "토크키트 - 가입완료",
  description: "토크키트 회원가입 완료 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}