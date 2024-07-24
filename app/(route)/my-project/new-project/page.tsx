import TopBar from "../../../components/TopBar/TopBar";
import MyProjectFooter from "../_components/Footer";
import NewProjectContainer from "../_container/new-project";

export default function MyProject_New() {
  return (
    <>
      <TopBar screen={"md"} />
      <div
        style={{ background: "rgba(189, 203, 253, 0.20)" }}
        className="pt-[132px] pb-[60px] h-auto flex py-[60px] px-4 lg:px-[120px] flex-col items-center self-stretch"
      >
        <NewProjectContainer />
      </div>
      <MyProjectFooter />
    </>
  );
}
