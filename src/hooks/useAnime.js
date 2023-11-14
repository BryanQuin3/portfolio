/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

export const useAnime = (classToRemove, animation) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.remove(classToRemove);
          entries[0].target.classList.add(animation);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(cardRef.current);
  }, [classToRemove, animation]);

  return cardRef;
};

export default useAnime;
