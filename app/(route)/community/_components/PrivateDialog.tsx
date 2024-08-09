import { useForm } from "react-hook-form";
import { IPrivateDialog } from "../_types/community_types";
import { DialogPrivateIcon } from "./Icons";
import { PRIVATE_DIALOG_TEXT } from "../_constants/constants";

export default function PrivateDialog({
  onBgClick,
  onBtnClick,
}: IPrivateDialog) {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ password }: { password: string }) => {
    onBtnClick(password);
  };

  return (
    <div
      onClick={onBgClick}
      className="fixed inset-0 flex-center z-50 bg-black bg-opacity-30"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        onClick={(e) => e.stopPropagation()}
        className="dialog-container"
      >
        <div className="flex flex-col items-center gap-4 self-stretch">
          {/* 아이콘 */}
          <DialogPrivateIcon />

          <div className="flex flex-col gap-2 w-full">
            {/* 텍스트 */}
            <div className="flex py-0 px-4 flex-col items-start gap-2 self-stretch">
              <span className="self-stretch text-center text-xl font-semibold">
                {PRIVATE_DIALOG_TEXT[0]}
              </span>
            </div>

            {/* 비밀번호 입력칸 */}
            <input
              {...register("password")}
              type="password"
              className="w-full border border-gray-2 rounded-lg px-4 h-[50px]"
              placeholder={PRIVATE_DIALOG_TEXT[1]}
            />
          </div>
        </div>

        {/* 버튼 */}
        <div className="flex py-0 px-4 items-center gap-4 self-stretch">
          {/* 기본 버튼 */}
          <button className="flex-center px-2 py-3 gap-2 rounded-lg w-full bg-primary-1">
            <span className="text-white font-bold leading-tight">
              {PRIVATE_DIALOG_TEXT[2]}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
