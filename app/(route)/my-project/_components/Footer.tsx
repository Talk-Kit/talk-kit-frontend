export default function MyProjectFooter() {
  return (
    <div className="flex py-3 lg:py-8 px-0 flex-col justify-end items-center self-stretch">
      <div className="flex justify-center items-start content-start flex-wrap">
        <div className="flex-center py-1 px-3 gap-[10px] border-r-[1px] border-gray-3">
          <span className="text-gray-3 text-center text-xs">
            Copyright @ 2024 by 운하
          </span>
        </div>

        <div className="flex-center py-1 px-3 gap-[10px] border-r-[1px] border-gray-3">
          <span className="text-gray-3 text-center text-xs">
            Hosting by (주) 운하
          </span>
        </div>

        <div className="flex-center py-1 px-3 gap-[10px] border-r-[1px] border-gray-3">
          <span className="text-gray-3 text-center text-xs">
            개인정보처리방침
          </span>
        </div>

        <div className="flex-center py-1 px-3 gap-[10px] border-r-[1px] border-gray-3">
          <span className="text-gray-3 text-center text-xs">이용약관</span>
        </div>

        <div className="flex-center py-1 px-3 gap-[10px]">
          <span className="text-gray-3 text-center text-xs">
            email : chloe_kang@naver.com
          </span>
        </div>
      </div>
    </div>
  );
}
