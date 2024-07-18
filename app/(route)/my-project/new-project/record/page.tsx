import TopBar from "../../../../components/TopBar/TopBar";
import RecordBox from "./_components/RecordBox";

export default function Record() {
  return (
    <>
      <TopBar screen="lg" />
      <div
        style={{
          background: "rgba(189, 203, 253, 0.20)",
          minHeight: "calc(100vh - 88px)",
        }}
        className="w-full flex justify-center pt-[72px]"
      >
        <div className="w-full pt-[3.75rem] max-w-[1200px] px-4">
          <div className="flex flex-col gap-3 w-full">
            <span className="font-semibold">음성녹음</span>
            {/* 녹음 기능 */}
            <RecordBox />
          </div>
        </div>
      </div>
    </>
  );
}
