import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import styles from "./home.module.css";
import GenerateVariableName from "./components/Applications/Generate";
import NotifySender from "./components/Applications/Notify";


export default function Project() {
  return (
    <div>
      <Flicking
        align="prev"
        circular={true}
      >
        <div className={styles.projectPanel}>
          <NotifySender></NotifySender>
        </div>
        <div className={styles.projectPanel}>
          <h1>미니 프로젝트</h1>
          <div style={{color: '#444444'}}>간단하지만 유용한 기능들을 앱으로 개발</div>
          <br />
          <Flicking
            align="prev"
            circular={true}
          >
            <div className={styles.projectPanelItem}>
              <GenerateVariableName></GenerateVariableName>
            </div>
            <div className={styles.projectPanelItem}>
              <h2>🚧 준비중</h2>
            </div>
          </Flicking>
        </div>
      </Flicking>
    </div>
  )
}