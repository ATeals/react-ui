import { useContext } from "react";
import { TriggerProps } from "./type";
import { DropboxOpenActionContext, DropboxEnableHoverContext } from "./Provider";

export const Trigger = ({ label, children }: TriggerProps) => {
  if ((!label && !children) || (label && children)) {
    throw new Error('Either "label" or "children" must be provided, but not both.');
  }
  const trigger = useContext(DropboxOpenActionContext);
  const enableHover = useContext(DropboxEnableHoverContext);

  return (
    <>
      {enableHover ? (
        <div className=" cursor-pointer">{children ? children : label}</div>
      ) : (
        <button onClick={trigger}>{children ? children : label}</button>
      )}
    </>
  );
};
