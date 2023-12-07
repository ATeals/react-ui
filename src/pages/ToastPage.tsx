import { Toast, useToast } from "@/components/Toast";
import { generateClassName } from "@/utils/generateClassName";

export const ToastPage = () => {
  const { showToast } = useToast(2000);

  const handleErrorToast = () => {
    showToast({ type: "error", message: "오류!" });
  };

  const handleSuccessToast = () => {
    showToast({ type: "success", message: "성공!" });
  };

  const handleInfoToast = () => {
    showToast({ type: "info", message: "정보!" });
  };

  return (
    <section>
      <button
        onClick={handleErrorToast}
        className={generateClassName("m-2 ring-2 p-1 ring-gray-300 rounded-lg bg-red-300 ")}
      >
        에러 토스트
      </button>
      <button
        onClick={handleSuccessToast}
        className={generateClassName("m-2 ring-2 p-1 ring-gray-300 rounded-lg bg-green-400 ")}
      >
        성공 토스트
      </button>
      <button
        onClick={handleInfoToast}
        className={generateClassName("m-2 ring-2 p-1 ring-gray-300 rounded-lg")}
      >
        정보 토스트
      </button>
      <Toast.Container />
    </section>
  );
};
