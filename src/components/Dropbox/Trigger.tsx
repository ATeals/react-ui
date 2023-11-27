import { useContext } from "react";
import { TriggerProps } from "./type";
import { DropboxOpenActionContext } from "./Provider";

export const Trigger = ({
  label,
  children,
  enableHover = false,
}: TriggerProps & { enableHover?: boolean }) => {
  if ((!label && !children) || (label && children)) {
    throw new Error('Either "label" or "children" must be provided, but not both.');
  }
  const trigger = useContext(DropboxOpenActionContext);

  return (
    <>
      {enableHover ? (
        <div onMouseOver={trigger} onMouseLeave={trigger}>
          {children ? children : label}
        </div>
      ) : (
        <button onClick={trigger}>{children ? children : label}</button>
      )}
    </>
  );
};
