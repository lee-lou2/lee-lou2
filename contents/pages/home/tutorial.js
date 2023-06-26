import React from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import styles from "./home.module.css"

export default function Tutorial() {
  const tutorials = [
    {
      title: "Python(Django)",
      description: "파이썬의 대표 웹 프레임워크<br />Django 에 대한 튜토리얼",
      keywords: ["Django", "DRF", "Celery"],
      url: "/docs/category/파이썬python"
    },
    {
      title: "Golang",
      description: "고에 대한 기본 튜토리얼<br />Gin 프레임워크를 이용한 튜토리얼",
      keywords: ["Gin", "gRPC", "Async"],
      url: "/docs/category/고golang"
    },
    {
      title: "인공지능",
      description: "인기 있거나 새로운 인공지능<br />기술들에 대한 튜토리얼",
      keywords: ["Trend", "New", "AI"],
      url: "/docs/category/인공지능"
    }
  ]
  return (
    <div>
      <Flicking
        align="prev"
        circular={true}
      >
        {tutorials.map((tutorial, index) => {
            return (
              <div className={styles.tutorialPanel} key={index} onClick={() => {
                location.href = tutorial.url
              }}>
                <h2>{tutorial.title}</h2>
                <div className={styles.tutorialPanelItem}>
                  <div dangerouslySetInnerHTML={{__html: tutorial.description}}></div>
                </div>
                <br/>
                <div>
                  {tutorial.keywords.map((keyword, index) => {
                    return (
                      <>
                        <code className={styles.tutorialTag} key={index}>#{keyword}</code>
                        {index !== tutorial.keywords.length - 1 && (
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
    </div>
  )
}