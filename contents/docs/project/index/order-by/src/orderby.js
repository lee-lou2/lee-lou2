import React from 'react';
import styles from "./orderby.module.css";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  );
}
