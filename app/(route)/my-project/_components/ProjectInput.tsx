import { ProjectInputProps } from "../_types/project_types";

export default function ProjectInput({
  placeholder,
  value,
  onChange,
}: ProjectInputProps) {
  return (
    <div className="flex py-0 px-6 items-center gap-3 self-stretch rounded-2xl bg-white">
      <input
        className="flex w-full py-[10px] items-center self-stretch outline-none font-semibold placeholder:text-gray-3 placeholder:font-normal"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
