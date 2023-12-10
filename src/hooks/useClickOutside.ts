import {
  RefObject,
  useCallback,
  useEffect,
} from "react";

export const useClickOutside = (
  componentRef: RefObject<HTMLElement>,
  handleClick: () => void,
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        componentRef.current &&
        event.target instanceof HTMLElement &&
        !componentRef.current.contains(event.target)
      ) {
        handleClick();
      }
    },
    [componentRef, handleClick],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
};
