import React from 'react';
import styles from "./video.module.css";

export default function Video() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.youtube.com/embed/-dUREkoUEiM"
        title="웨이팅 서비스"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
