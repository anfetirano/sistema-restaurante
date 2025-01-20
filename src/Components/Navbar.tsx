import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link className={styles.a} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.a} to="/inventario">Inventario</Link>
        </li>
        <li>
          <Link className={styles.a} to="/pedidos">Pedidos</Link>
        </li>
        <li>
          <Link className={styles.a} to="/preelaboraciones">Preelaboraciones</Link>
        </li>
        <li>
          <Link className={styles.a} to="/configuracion">Configuración</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
