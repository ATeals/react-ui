import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { OptionValue } from "./type";

export const DropboxStateContext = createContext(false);
export const DropboxOpenActionContext = createContext(() => {});
export const DropboxsetStateContext = createContext<Dispatch<SetStateAction<any>>>(() => {});

export const Provider = <T extends OptionValue>({
  children,
  changeState,
}: {
  children?: React.ReactNode;
  changeState: Dispatch<SetStateAction<T>>;
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

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, isOpen]);

  return (
    <DropboxOpenActionContext.Provider value={toggleIsOpen}>
      <DropboxsetStateContext.Provider value={changeState}>
        <DropboxStateContext.Provider value={isOpen}>
          <div className="relative inline-block" ref={dropdownRef}>
            {children}
          </div>
        </DropboxStateContext.Provider>
      </DropboxsetStateContext.Provider>
    </DropboxOpenActionContext.Provider>
  );
};
