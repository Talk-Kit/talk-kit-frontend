import React from "react";

export const metadata = {
  title: "토크키트 - 약관동의",
  description: "토크키트 약관동의 페이지",
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
