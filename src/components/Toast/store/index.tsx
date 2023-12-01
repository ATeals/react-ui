import { create } from "zustand";
import { ToastStore } from "../type";

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (newToast) => set((store) => ({ ...store, toasts: [...store.toasts, newToast] })),
  deleteToast: (toastId) =>
    set((store) => ({ ...store, toasts: store.toasts.filter((toast) => toast.id !== toastId) })),
}));
