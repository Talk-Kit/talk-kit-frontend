import TopBar from "../../_components/TopBar/TopBar";
import Footer from "../_components/Footer";

export const metadata = {
  title: "커뮤니티",
  description: "토크키트 커뮤니티",
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
