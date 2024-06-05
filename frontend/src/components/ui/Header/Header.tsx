import React, { useEffect, useState } from 'react'
import styles from './Header.module.css'




function Header() {
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollPos = 0;
  // const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = ()=>{
      const scrollTopPos = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTopPos > lastScrollPos) {
        setShowHeader(false);//hide the header when scroling down
      }
      else {
        setShowHeader(true);
      }
      lastScrollPos = scrollTopPos <= 0 ? 0 : scrollTopPos;//last scrollPos varies from 0 to postiive number never negative
      // setLastScrollPos(scrollTopPos <= 0 ? 0 : scrollTopPos);
    };

    // console.log(window.addEventListener('scroll',handleScroll));
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);




  return (
    <>
      <div className={`${styles.header} ${showHeader ? styles.show : styles.hide}`}>Header
      </div>
      

    </>

  )
}

export default Header