import { shallow } from "zustand/shallow";
import { useToastStore } from "../store";
import { useCallback } from "react";
import { ToastObject } from "../type";

export const useToast = (defaultValidateTime?: number) => {
  const { addToast, deleteToast } = useToastStore(
    (store) => ({
      addToast: store.addToast,
      deleteToast: store.deleteToast,
    }),
    shallow
  );

  const showToast = useCallback(
    (toast: ToastObject) => {
      addToast({ ...toast, validate: toast.validate || defaultValidateTime });
    },
    [addToast, defaultValidateTime]
  );

  return { showToast, deleteToast };
};
