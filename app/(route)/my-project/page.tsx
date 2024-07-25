import TopBar from "../../components/TopBar/TopBar";
import MyProjectFooter from "./_components/Footer";
import MyProjectContainer from "./_container/my-project";

export default function MyProject() {
  return (
    <>
      <TopBar screen={"md"} />
      <MyProjectContainer />
      <MyProjectFooter />
    </>
  );
}
