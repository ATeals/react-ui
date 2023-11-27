import { useContext } from "react";
import { DropboxOpenActionContext, DropboxsetStateContext } from "./Provider";
import { OptionValue } from "./type";

export const Option = ({ children, value }: { children?: React.ReactNode; value: OptionValue }) => {
  const trigger = useContext(DropboxsetStateContext);
  const toggleIsOpen = useContext(DropboxOpenActionContext);

  return (
    <button
      className="block p-2 w-full"
      onClick={(e) => {
        trigger(e.currentTarget.value);
        toggleIsOpen();
      }}
      value={value}
    >
      {children}
    </button>
  );
};
