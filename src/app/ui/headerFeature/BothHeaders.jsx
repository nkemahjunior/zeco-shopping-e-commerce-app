'use client'

import { useEffect, useState } from "react";
import MobileHeader from "./MobileHeader";
import LargeHeader from "./LargeHeader";


function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

function BothHeaders() {

  const [windowSize, setWindowsize] = useState(getWindowSize());

  useEffect(() => {
      
      function handleWindowResize() {
          
          setWindowsize(getWindowSize())
        }
    

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  },[]);

    if (window==='undefined') return(<p>loading window</p>)


    return (
        <>
      {windowSize.innerWidth < 768 ? <MobileHeader /> : <LargeHeader />}
      </>
    )
}

export default BothHeaders
