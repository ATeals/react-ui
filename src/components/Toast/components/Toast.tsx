import { useEffect } from "react";
import { useToastStore } from "../store";
import { ToastObject } from "../type";
import { generateClassName } from "@/utils/generateClassName";
import { TOAST } from "../constants";

export const Toast = ({ toast }: { toast: ToastObject }) => {
  const deleteToast = useToastStore((state) => state.deleteToast);

  useEffect(() => {
    if (toast.validate === undefined) return;
    setTimeout(() => {
      deleteToast(toast.id);
    }, toast.validate || 0);
  }, [deleteToast, toast]);

  return (
    <div
      id={toast.id}
      className={generateClassName(
        toast.type === "info" && "bg-gray-200",
        toast.type === "error" && "bg-red-400 text-gray-100",
        toast.type === "success" && "bg-green-500 text-gray-100",
        "p-2 rounded-md"
      )}
    >
      {toast.message}
    </div>
  );
};

const Container = () => {
  const toasts = useToastStore((state) => state.toasts);
  const deleteToast = useToastStore((state) => state.deleteToast);
  return (
    <div
      id={TOAST.CONTAINER}
      className="fixed w-11/12 max-w-xs bottom-3 left-1/2 -translate-x-1/2 space-y-3 [&>*]:cursor-pointer"
      onClick={(e) => {
        const Toast = e.target as HTMLDivElement;
        deleteToast(Toast.id);
      }}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

Toast.Container = Container;
