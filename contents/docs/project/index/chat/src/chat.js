import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function requestChatGPTAPI(apiServerHost) {
  const questionInput = document.getElementById("chatgpt-request-body-api");
  const answerOutput = document.getElementById("chatgpt-response-body-api");
  answerOutput.innerHTML = '작성중...';
  const url = apiServerHost + "/v1/ai/wrtn";
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "text": questionInput.value,
    })
  }).then(response => response.json()).then(data => {
    answerOutput.innerHTML = data.message;
  });
}

export default function ChatGPTTest() {
  const { siteConfig } = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  return (
    <div>
      <h2>ChatGPT API 테스트</h2>
      <div className={styles.chatTestElements}>
        <TextField id="chatgpt-request-body-api" label="질문" size="small" placeholder="질문을 입력해주세요" />
        <Button variant="contained" onClick={() => { requestChatGPTAPI(apiServerHost) }}>입력</Button>
        <CodeBlock className={styles.chatTestResponseBoard}><span id="chatgpt-response-body-api">답변</span></CodeBlock>
      </div>
    </div>
  );
}