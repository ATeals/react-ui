export interface ToastObject {
  type: "info" | "error" | "success";
  message: string;
  icon?: string;
  id: string;
  validate?: number | false;
}

export interface ToastStore {
  toasts: ToastObject[];
  addToast: (newToast: ToastObject) => void;
  deleteToast: (toastId: string) => void;
}
