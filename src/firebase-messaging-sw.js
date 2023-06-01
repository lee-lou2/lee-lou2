import React, { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function requestPermission(firebaseConfig, vapidKey) {
  console.log('Requesting permission...');
  // Notification 이 있는지 여부 확인
  if (!('Notification' in window)) {
    if (document.getElementById("notification-test-push")) {
      console.log("This browser does not support desktop notification");
      document.getElementById("notification-test-push").style.display = "none";
    }
    return;
  }
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);
      getToken(messaging, { vapidKey: vapidKey })
        .then(currentToken => {
          if (currentToken) {
            if (document.getElementById("firebase-token")) {
              document.getElementById("firebase-token").value = currentToken;
              document.getElementById("firebase-token-status").value = "푸시 전송이 가능합니다";
            }
          } else {
            if (document.getElementById("firebase-token-status")) {
              console.log('No registration token available. Request permission to generate one.');
              document.getElementById("firebase-token-status").value = "토큰 발급을 실패하였습니다";
            }
          }
        });
    } else {
      if (document.getElementById("firebase-token-status")) {
        console.log('Unable to get permission to notify.');
        document.getElementById("firebase-token-status").value = "브라우저의 '알림' 기능을 허용해주세요";
      }
    }
  });
}

export default function ServiceWorker() {
  const { siteConfig } = useDocusaurusContext();
  const firebaseConfig = {
    apiKey: siteConfig.customFields.FIREBASE_API_KEY,
    authDomain: siteConfig.customFields.FIREBASE_AUTH_DOMAIN,
    projectId: siteConfig.customFields.FIREBASE_PROJECT_ID,
    storageBucket: siteConfig.customFields.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: siteConfig.customFields.FIREBASE_MESSAGING_SENDER_ID,
    appId: siteConfig.customFields.FIREBASE_APP_ID,
    measurementId: siteConfig.customFields.FIREBASE_MEASUREMENT_ID
  };
  const vapidKey = siteConfig.customFields.FIREBASE_VAPID_KEY;
  useEffect(() => {
    requestPermission(firebaseConfig, vapidKey);
  }, []);
};