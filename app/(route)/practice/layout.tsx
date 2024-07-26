import TopBar from "../../components/TopBar/TopBar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "발표 연습",
  description: "토크키트 발표 연습 페이지",
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
      <Footer />
    </>
  );
}
