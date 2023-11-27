import { useContext } from "react";
import { DropboxStateContext } from "./Provider";

export const Menu = ({ children }: { children: React.ReactNode }) => {
  const isOpen = useContext(DropboxStateContext);

  return (
    isOpen && <div className="absolute rigth-0 origin-top-right z-50 bg-inherit">{children}</div>
  );
};
