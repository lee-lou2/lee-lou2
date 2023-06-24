import React from 'react';
import styles from "./index.module.css";

export default function Index(props) {
  return (
    <div className={styles.container}>
      <iframe
        src={props.src}
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
