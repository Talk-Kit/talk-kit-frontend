import TopBar from "../../_components/TopBar/TopBar";

export const metadata = {
  title: "회원가입",
  description: "토크키트 회원가입",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar screen={"lg"} />
      {children}
    </>
  );
}
