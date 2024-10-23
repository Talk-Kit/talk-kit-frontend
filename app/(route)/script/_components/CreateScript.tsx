import { useCallback, useState } from "react";
import { CreateScriptProps, ScriptForm } from "../_interfaces/interfaces";
import TextEditor from "../../community/_components/TextEditor";
import DropDown from "../../../_components/DropDown";
import { useForm } from "react-hook-form";

export default function CreateScript({
  defaultValue,
  projectList,
  onSubmit,
}: CreateScriptProps) {
  // 드롭다운 관련 state 선언
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");

  // 대본 form 데이터 생성
  const { register, handleSubmit, setValue } = useForm<ScriptForm>();
  const onValid = (data: ScriptForm) => {
    // 제목, 내용, 프로젝트 선택 시 저장 가능
    if (data.fileName !== "" && data.fileContent !== "" && data.projectSeq) {
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)} className="section-container">
      <span className="title-text">대본 작성</span>
      <input
        {...register("fileName")}
        className="text-input"
        placeholder="저장할 대본의 제목을 작성해 주세요"
      />
      <TextEditor
        defaultValue={defaultValue}
        onChange={useCallback(
          (text) => {
            setValue("fileContent", text);
          },
          [setValue]
        )}
        height="500px"
        width="100%"
      />
      <DropDown
        currentValue={selectedProject}
        isOpened={isDropdownOpen}
        onDropDownClick={() => setIsDropdownOpen((prev) => !prev)}
        onSelectionClick={(selected) => {
          setSelectedProject(selected);
          setValue(
            "projectSeq",
            projectList.filter((el) => el.project === selected)[0].id
          );
        }}
        placeholder="저장할 프로젝트를 선택해 주세요"
        selectionList={projectList.map((el) => el.project)}
      />
      <button className="primary-script-button" type="submit">
        저장하기
      </button>
    </form>
  );
}
