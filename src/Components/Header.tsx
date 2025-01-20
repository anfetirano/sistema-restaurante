// src/Components/Header.tsx
import React from "react";
import Navbar from "./Navbar";
import styles from "../Styles/Header.module.css"; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Navbar /> 
    </header>
  );
};

export default Header;
