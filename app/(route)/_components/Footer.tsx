export default function Footer() {
  return (
    <footer className="w-full bg-white py-8 flex justify-center border-t border-gray-2">
      <div className="flex items-center">
        <span className="text-gray-2 text-xs px-3 py-1">
          Copyright © 2024 by 운하
        </span>
        <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
        <span className="text-gray-2 text-xs px-3 py-1">
          Hosting by (주)운하
        </span>
        <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
        <span className="text-gray-2 text-xs px-3 py-1">개인정보처리방침</span>
        <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
        <span className="text-gray-2 text-xs px-3 py-1">이용약관</span>
        <div className="w-[1px] h-3 bg-gray-2 shrink-0" />
        <span className="text-gray-2 text-xs px-3 py-1">
          email : chloe_kang@naver.com
        </span>
      </div>
    </footer>
  );
}
