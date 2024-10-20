import { FolderIcon } from "../../_components/Icons";

interface IFileCard {
  title: string;
  fileName: string;
}

export default function FileCard({ title, fileName }: IFileCard) {
  return (
    <div className="py-4 bg-white px-4 rounded-lg h-[150px] lg:h-[200px]">
      <div className="flex flex-col items-center h-full justify-around">
        <span className="text-center text-xs">{title}</span>
        <FolderIcon />
        <span>{fileName}</span>
      </div>
    </div>
  );
}
