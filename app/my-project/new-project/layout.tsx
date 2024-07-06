import React from "react";

export const metadata = {
  title: "토크키트",
  description: "토크키트 프로젝트",
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
