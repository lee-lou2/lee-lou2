import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import ServiceWorker from "@site/src/firebase-messaging-sw"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styles from "./notifications.module.css";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function getSchedulerData() {
  const schedulerTypeValue = document.getElementById("scheduler-type-value").value;
  if (schedulerTypeValue === "0") {
    return {
      schedulerType: schedulerTypeValue
    };
  }
  const schedulerDate = document.getElementById("scheduler-date").value;
  const schedulerTime = document.getElementById("scheduler-time").value;
  const schedulerCount = document.getElementById("scheduler-count").value;
  const schedulerInterval = document.getElementById("scheduler-interval").value;
  const datetimeValue = schedulerDate + " " + schedulerTime + ":00";
  return {
    schedulerType: 2,
    interval: {
      startTime: datetimeValue,
      count: parseInt(schedulerCount),
      duration: parseInt(schedulerInterval)
    }
  }
}

function sendPush(apiServerHost) {
  const scheduler = getSchedulerData();
  const url = apiServerHost + "/v1/notify/push";
  const token = document.getElementById("firebase-token").value;
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        fmcTokens: [token],
        title: "[lou2] 푸시 전송 테스트",
        message: "메세지가 정상적으로 전달되었습니다."
      },
      scheduler
    })
  }).then(response => response.json()).then(data => {
    let status = "전송 실패";
    if (data.message === "success") {
      status = "전송 성공";
    }
    document.getElementById("firebase-token-status").value = status;
  })
}


function sendEmail(apiServerHost) {
  const scheduler = getSchedulerData();
  const email = document.getElementById("email").value;
  const subject = "[lou2] 이메일 전송 테스트";
  const message = "메세지가 정상적으로 전달되었습니다.";
  const url = apiServerHost + "/v1/notify/email";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        emails: [email],
        subject,
        message
      },
      scheduler
    })
  }).then(response => response.json()).then(data => {
    let status = "전송 실패";
    if (data.message === "success") {
      status = "전송 성공";
    }
    document.getElementById("email-status").value = status;
  })
}


function sendSMS(apiServerHost) {
  const scheduler = getSchedulerData();
  const phone = document.getElementById("phone").value;
  const message = "[lou2] 메세지가 정상적으로 전달되었습니다.";
  const url = apiServerHost + "/v1/notify/sms";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        phones: [phone],
        message
      },
      scheduler
    })
  }).then(response => response.json()).then(data => {
    let status = "전송 실패";
    if (data.message === "success") {
      status = "전송 성공";
    }
    document.getElementById("phone-status").value = status;
  })
}

export default function TestWebPush() {
  const {siteConfig} = useDocusaurusContext();
  const apiServerHost = siteConfig.customFields.API_SERVER_HOST;
  ServiceWorker();
  const [schedulerType, setSchedulerType] = useState(2);
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSchedulerType(selectedValue);
    document.getElementById("scheduler-type-value").value = selectedValue;
    if (selectedValue === "0") {
      document.getElementById("scheduler-detail").style.display = "none";
    } else {
      document.getElementById("scheduler-detail").style.display = "flex";
    }
  };
  return (
    <div>
      <div>
        <div style={{marginBottom: '30px'}}>
          <FormControl sx={{m: 1, minWidth: 150}} size="small">
            <InputLabel id="scheduler-type-label">발송 형태</InputLabel>
            <Select
              labelId="scheduler-type-label"
              id="scheduler-type"
              value={schedulerType}
              label="Scheduler Type"
              onChange={handleChange}
            >
              <MenuItem value="0">즉시발송</MenuItem>
              <MenuItem value="2">에약발송</MenuItem>
            </Select>
          </FormControl>
          <div id="scheduler-type-value" style={{display: "none"}}></div>
          <div id="scheduler-detail" className={styles.scheduleDetail}>
            <div>
              <div>요일</div>
              <TextField id="scheduler-date" size="small" type="date"
                         defaultValue={new Date(new Date().getTime() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10)}/>
            </div>
            <div>
              <div>시간</div>
              <TextField id="scheduler-time" size="small" type="time"
                         defaultValue={new Date().toLocaleTimeString('ko-kr', {
                           hour12: false,
                           hour: "numeric",
                           minute: "numeric"
                         })}/>
            </div>
            <div>
              <div>전송 수</div>
              <TextField id="scheduler-count" size="small" type="number" defaultValue="1"/>
            </div>
            <div>
              <div>전송 주기</div>
              <TextField id="scheduler-interval" size="small" type="number" defaultValue="5" inputProps={{min: "5"}}/>
            </div>
          </div>
        </div>
      </div>
      <div id="notification-test-push">
        <h3>푸시 전송 테스트</h3>
        <div className={styles.notificationTestElements}>
          <TextField className={styles.pushToken} id="firebase-token" size="small" disabled/>
          <Button variant="contained" onClick={() => {
            sendPush(apiServerHost)
          }}>푸시 전송</Button>
          <TextField id="firebase-token-status" size="small" placeholder="전송 상태" disabled/>
        </div>
      </div>
      <div id="notification-test-email">
        <h3>이메일 전송 테스트</h3>
        <div className={styles.notificationTestElements}>
          <TextField id="email" size="small"/>
          <Button variant="contained" onClick={() => {
            sendEmail(apiServerHost)
          }}>이메일 전송</Button>
          <TextField id="email-status" size="small" placeholder="전송 상태" disabled/>
        </div>
      </div>
      <div id="notification-test-sms">
        <h3>문자 전송 테스트</h3>
        <div className={styles.notificationTestElements}>
          <TextField id="phone" size="small"/>
          <Button variant="contained" onClick={() => {
            sendSMS(apiServerHost)
          }}>문자 전송</Button>
          <TextField id="phone-status" size="small" placeholder="전송 상태" disabled/>
        </div>
      </div>
    </div>
  );
}