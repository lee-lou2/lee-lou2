import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from "./index.module.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function sendEmail(apiServerHost) {
  const emailInput = document.getElementById("email-sender");
  const email = emailInput.value;
  const subject = "[lou2] 이메일 전송 테스트";
  const message = "메세지가 정상적으로 전달되었습니다.";
  const url = apiServerHost + "/v1/notify/email";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "data": {
        "emails": [email],
        "subject": subject,
        "message": message
      },
    })
  }).then(response => response.json()).then(data => {
    let status = "전송 실패";
    if (data.message === "success") {
      status = "전송 성공";
    }
    alert(status);
  })
}


function sendSMS(apiServerHost) {
  const phoneInput = document.getElementById("phone-sender");
  const phone = phoneInput.value;
  const message = "[lou2] 메세지가 정상적으로 전달되었습니다.";
  const url = apiServerHost + "/v1/notify/sms";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "data": {
        "phones": [phone],
        "message": message
      },
    })
  }).then(response => response.json()).then(data => {
    let status = "전송 실패";
    if (data.message === "success") {
      status = "전송 성공";
    }
    alert(status);
  })
}

export default function NotifySender() {
  const {siteConfig} = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  return (
    <>
      <h1>알림 전송</h1>
      <div className={styles.notifyElementDescription}>GO 를 이용한 이메일, 문자, 웹 푸시 등의 전송 프로젝트</div>
      <div className={styles.notifyElements}>
        <div className={styles.notifyElementItems}></div>
        <div className={styles.notifyElementItems}></div>
        <h3>✉️ 이메일 전송 테스트</h3>
        <TextField id="email-sender" placeholder="이메일 주소" size="small"/>
        <div className={styles.notifyElementItems}></div>
        <Button variant="contained" onClick={() => {
          sendEmail(apiServerHost)
        }}>이메일 보내기</Button>
        <div className={styles.notifyElementItems}></div>
        <div className={styles.notifyElementItems}></div>

        <h3>💬 문자 전송 테스트</h3>
        <TextField id="phone-sender" placeholder="휴대폰 번호" size="small"/>
        <div className={styles.notifyElementItems}></div>
        <Button variant="contained" onClick={() => {
          sendSMS(apiServerHost)
        }}>문자 보내기</Button>
        <div className={styles.notifyElementItems}></div>
        <div className={styles.notifyElementItems}></div>
        <div className={styles.notifyElementItems} onClick={() => {
          location.href = '/docs/project/index/notifications/'
        }}>
          자세히보기
        </div>
      </div>
    </>
  )
}