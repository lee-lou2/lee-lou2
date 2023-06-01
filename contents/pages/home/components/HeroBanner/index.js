import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import styles from "./index.module.css";
import SkillsBanner from "./skills";

export default function HeroBanner() {
  return (
    <div>
      <Flicking
        align="prev"
        circular={true}
        nested={false}
      >
          <div className={styles.banner}>
            <h1>
              👋 안녕하세요
            </h1>
            <span className={styles.bannerInstroduce}>개발자</span>
            <span className={styles.bannerName}> 장승국 </span>
            <span className={styles.bannerInstroduce}>입니다</span>
            <div className={styles.bannerDescription}>오른쪽에 더 자세한 정보들이 준비되어 있어요 🚃</div>
            <div className={styles.bannerBlank}></div>
            <div className={styles.bannerButtons}>
              <button 
                className={styles.bannerLeftButton}
                onClick={() => {location.href="/docs/iam"}}
              >
                자세히 보기
              </button>
              <span> </span>
              <button 
                className={styles.bannerRightButton}
                onClick={() => {location.href="mailto:lee@lou2.kr"}}
              >
                문의하기
              </button>
            </div>
          </div>
          <div className={styles.banner}>
            <SkillsBanner></SkillsBanner>
          </div>
      </Flicking>
    </div>
  )
}