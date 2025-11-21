
  import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to top without animation
    window.scrollTo({ top: 0, behavior: "instant" }); 
    // 'instant' is not standard, fallback to 0,0:
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Scroll;

