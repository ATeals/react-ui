import { createContext, useCallback, useEffect, useRef, useState } from "react";

export const DropboxStateContext = createContext(false);
export const DropboxOpenActionContext = createContext(() => {});
export const DropboxEnableHoverContext = createContext(false);

export const Provider = ({
  children,
  enableHover = false,
}: {
  children?: React.ReactNode;
  enableHover?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = useCallback(() => setIsOpen((isOpen) => !isOpen), []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [handleClickOutside, isOpen]);

  return (
    <DropboxOpenActionContext.Provider value={toggleIsOpen}>
      <DropboxEnableHoverContext.Provider value={enableHover}>
        <DropboxStateContext.Provider value={isOpen}>
          {enableHover ? (
            <div
              onMouseOver={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative inline-block"
              ref={dropdownRef}
            >
              {children}
            </div>
          ) : (
            <div className="relative inline-block" ref={dropdownRef}>
              {children}
            </div>
          )}
        </DropboxStateContext.Provider>
      </DropboxEnableHoverContext.Provider>
    </DropboxOpenActionContext.Provider>
  );
};
