import { useEffect } from "react";

const useOutsideClickHandler = (
  ref: React.RefObject<HTMLDivElement>,
  stateFunction: (bool: boolean) => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        stateFunction(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
};

export default useOutsideClickHandler;
