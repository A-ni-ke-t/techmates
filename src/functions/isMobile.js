import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileUA = /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileUA || isSmallScreen);
    };
  
    checkDevice();
    window.addEventListener("resize", checkDevice);
  
    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);
  

  return isMobile;
};

export default useIsMobile;
