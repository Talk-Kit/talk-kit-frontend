import { useForm } from "react-hook-form";
import { SearchIcon } from "./Icons";
import { COMMUNITY_TEXT } from "../_constants/constants";
import BoardSelection from "./BoardSelection";
import { useRouter } from "next/navigation";
import { ISearch } from "../_types/community_types";

export default function MenuBox() {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ search }: ISearch) => {
    if (search !== "") {
      console.log(search);
    } else {
      alert("검색어를 입력해주세요");
    }
  };

  const router = useRouter();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <BoardSelection onSelect={() => {}} />
        <div className="flex items-center w-full px-4 py-3 bg-gray-0 rounded-full gap-2">
          <input
            {...register("search")}
            className="grow placeholder:text-gray-4 outline-none bg-transparent"
            placeholder={COMMUNITY_TEXT[0]}
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
      <section className="w-full flex justify-end">
        <button
          onClick={() => router.push("community/new-post")}
          className="short-button"
        >
          {COMMUNITY_TEXT[1]}
        </button>
      </section>
    </>
  );
}
