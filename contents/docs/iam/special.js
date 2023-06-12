import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import styles from "./special.module.css"

export default function Special() {
  const histories = [
    {
      title: "안무가",
      description: "한국 예술 종합학교 창작과<br/>네이버에서 <b>장승국</b>을 검색해주세요",
      keywords: ["안무가", "무용", "창작"],
      url: "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bjky&x_csa=%7B%22fromUi%22%3A%22kb%22%7D&pkid=1&os=180430&qvt=0&query=%EC%9E%A5%EC%8A%B9%EA%B5%AD%20%ED%94%84%EB%A1%9C%ED%95%84"
    },
    {
      title: "직업 군인",
      description: "육군 중사 전역<div style='color:#999999'>(2010~2015년 복무)</div>",
      keywords: ["육군", "중사", "만기_전역"],
      url: ""
    }
  ]
  return (
    <>
      <div className={styles.container}>
        <h2>🏆 특별한 이력</h2>
      </div>
      <Flicking
        align="prev"
        circular={true}
      >
        {histories.map((history, index) => {
            return (
              <div className={styles.specialPanel} key={index} onClick={() => {
                if (history.url) {
                  window.open(history.url)
                }
              }}>
                <h2>{history.title}</h2>
                <div className={styles.specialPanelItem}>
                  <div dangerouslySetInnerHTML={{__html: history.description}}></div>
                </div>
                <br/>
                <div>
                  {history.keywords.map((keyword, index) => {
                    return (
                      <>
                        <code className={styles.specialTag} key={index}>#{keyword}</code>
                        {index !== history.keywords.length - 1 && (
                          <span> </span>
                        )}
                      </>
                    )
                  })}
                </div>
              </div>
            )
          }
        )
        }
      </Flicking>
    </>
  )
}