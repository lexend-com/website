import { useState, useEffect } from 'react';

function useOnScreen(ref, rootMargin = '0px') {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (node) {
      observer.observe(node);
    }
    // disconnect() is safe even if the node has since been removed, avoiding
    // the "unobserve(null)" crash the previous cleanup could throw on unmount.
    return () => observer.disconnect();
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}

export default useOnScreen
