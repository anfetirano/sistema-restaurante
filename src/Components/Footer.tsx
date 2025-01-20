import React from "react";
import styles from "../Styles/Footer.module.css"; // Importa el archivo de estilos

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Derechos reservados a Sistema Restaurante</p>
    </footer>
  );
};

export default Footer;