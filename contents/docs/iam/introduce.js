import React from 'react';
import CodeBlock from '@theme/CodeBlock';

import styles from './introduce.module.css';

const email = "lee@lou2.kr";
const greeting = `
저는,
<br />
<strong>매일 더</strong> 성장합니다
<br />
<strong>매일 더</strong> 도전합니다
<br />
배우고 싶은게 있다면,
<br />
배워야할게 있다면...
`;
const motto = "not enough…";
const goCode = `for {
  공부("매일", "다양한")
}
...😅`;

export default function Introduce() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftLayout}>
          <img src="/img/face.jpg" alt="Profile" className={styles.profileImg} />
          <br />
          <div style={{ marginBottom: "5px", marginTop: "5px" }}>
            <strong>✉️ {email}</strong>
          </div>
        </div>
        <div className={styles.rightLayout}>
          <div dangerouslySetInnerHTML={{ __html: greeting }} />
          <br />
          <div style={{ color: "gray", marginBottom: "10px" }}>
            <i>{motto}</i>
          </div>
          <CodeBlock language="go">
            {goCode}
          </CodeBlock>
        </div>
      </div>
    </>
  )
}
