import React from "react";
import styles from "./home.module.css";

export default function Keyword() {
  const contents = [
    {
      keywords: ["python", "chatgpt", "openai", "function_call"],
      title: "[Python] ChatGPT Function Call",
      url: "2023/06/16/0030",
      path: "/blog/backend/"
    },
    {
      keywords: ["go", "socket", "slack"],
      title: "[GO] 슬랙 소켓 모드",
      url: "2023/05/17/0015",
      path: "/blog/backend/"
    },
    {
      keywords: ["django", "orm", "full-text-search"],
      title: "[Django] Full Text Search 설정/사용",
      url: "2023/05/25/0001",
      path: "/blog/backend/"
    },
    {
      keywords: ["aws", "cicd", "code-commit", "git"],
      title: "[AWS] CI/CD 1단계, Code Commit - Git 원격 저장소 생성",
      url: "2023/05/31/0003",
      path: "/blog/infra/"
    },
    {
      keywords: ["aws", "cicd", "code-build", "buildspec"],
      title: "[AWS] CI/CD 2단계, Code Build 생성 및 buildspec 등 작성",
      url: "2023/05/31/0004",
      path: "/blog/infra/"
    },
    {
      keywords: ["aws", "cicd", "code-deploy", "beanstalk"],
      title: "[AWS] CI/CD 3단계, Deploy 환경 구축, Beanstalk 생성/설정",
      url: "2023/05/31/0005",
      path: "/blog/infra/"
    },
    {
      keywords: ["etc", "command", "linux", "docker"],
      title: "[ETC] 자주 사용하는 명령 모음",
      url: "2023/06/05/0003#-django-admin-dockerfile",
      path: "/blog/etc/"
    },
  ];

  return (
    <div className={styles.keywordPanel}>
      <table style={{width: "100%"}}>
        <thead>
        <tr>
          <th>키워드</th>
          <th>제목</th>
        </tr>
        </thead>
        <tbody>
        {contents.map((content, index) => {
          return (
            <tr key={index}>
              <td style={{width: "300px", minWidth: "200px"}}>
                {content.keywords.map((keyword, index) => {
                  return (
                    <>
                        <span
                          key={index}
                          className={styles.keyword}
                          onClick={() => {
                            location.href = content.path + "tags/" + keyword;
                          }}
                        >
                          <code className={styles.keywordCode}>{keyword}</code>
                        </span>
                      {index !== content.keywords.length - 1 && (
                        <span> </span>
                      )}
                    </>
                  );
                })}
              </td>
              <td style={{minWidth: "500px"}}>
                <a href={content.path + content.url} className={styles.title}>
                  {content.title}
                </a>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );
}