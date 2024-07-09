import React from "react";

export const metadata = {
  title: "토크키트 - 회원생성",
  description: "토크키트 회원생성 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
