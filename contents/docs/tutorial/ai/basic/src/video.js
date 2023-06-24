import React from 'react';
import styles from "./video.module.css";

export default function Video() {
  return (
    <div className={styles.container}>
      <iframe
        src="https://www.youtube.com/embed/gSm96o3rMUE"
        title="텍스트 이미지 생성"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
