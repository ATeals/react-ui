import { useContext } from "react";
import { DropboxOpenActionContext } from "./Provider";

export const Option = ({
  children,
  isSelect,
}: {
  children?: React.ReactNode;
  isSelect?: () => unknown;
}) => {
  const toggleIsOpen = useContext(DropboxOpenActionContext);

  return (
    <button
      className="block p-2 w-full"
      onClick={() => {
        if (isSelect) isSelect();
        toggleIsOpen();
      }}
    >
      {children}
    </button>
  );
};
