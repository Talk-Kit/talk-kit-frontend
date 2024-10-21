import { useForm } from "react-hook-form";
import { CreateScriptDraftProps } from "../_interfaces/interfaces";

export default function CreateScriptDraft({
  onSubmit,
}: CreateScriptDraftProps) {
  // 대본 초안 form 데이터 생성
  const { register, handleSubmit } = useForm<{ draft: string }>();
  const onValid = ({ draft }) => {
    // 초안 내용 작성 시 생성 가능
    if (draft !== "") {
      onSubmit(draft);
    }
  };
  return (
    <form onSubmit={handleSubmit(onValid)} className="section-container">
      <span className="title-text">대본 초안 작성</span>
      <textarea
        {...register("draft")}
        className="text-input h-[200px]"
        placeholder="발표의 주제 및 핵심내용을 포함하여 입력해 주세요"
      />
      <button className="default-script-button" type="submit">
        생성하기
      </button>
    </form>
  );
}
