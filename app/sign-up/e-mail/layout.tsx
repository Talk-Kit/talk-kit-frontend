import React from "react";

export const metadata = {
  title: "토크키트 - 이메일 인증",
  description: "토크키트 이메일 인증 페이지",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
