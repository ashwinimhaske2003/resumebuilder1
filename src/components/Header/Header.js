import React from "react";



import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
        our Gateway to <span>Success!!</span> 
        </p>
        <p className={styles.heading}>
        Unlock Opportunities with Professional <span> Resumes</span>
        </p>
      </div>
      
    </div>
  );
}

export default Header;
