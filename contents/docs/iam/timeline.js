import React from "react";
import styles from "./timeline.module.css";
import ReactMarkdown from 'react-markdown';

const historyTitle = "📄 히스토리";
const timelineIcons = ["😍", "📙", "💳", "🪑"];

const timelineData = [
  {
    title: "개인 ",
    period: "진행중",
    description: `
  ---

#### ⭐️⭐️ SSO 서버 구축
- 프레임워크 : Django
- 라이브러리 : \`django-oauth-toolkit\`, \`allauth\`
- Grant Type : **Authorization Code**
- ID Token(OIDC) 발급
- [**프로젝트 상세로 이동 🚀**](/docs/project/index/sso/)

#### ⭐️⭐️⭐️ GO API 서버 구축
- RestfulAPI : Gin 프레임워크
- RPC : gRPC
- Message Queue : RabbitMQ
- External API
  - Google
  - Firebase
  - Slack
  - Twillio
- 캐싱
  - Publisher, Consumer 구조를 이용한 메시지 큐
  - Pub/Sub 구조를 이용한 메시지 큐

#### ⭐️⭐️ Notification 서버 구축(GO)
- Goroutine 을 이용한 비동기 처리
- Channel 을 통한 내부 큐 활용
- 스케쥴링 서비스 : GO Cron
- 서비스
  - Email
  - SMS : Twillio
  - Push : Firebase
  - Slack
  - KakaoTalk
- 기록 관리 : MongoDB

#### ⭐️ AI 관련
- 파인튜닝 : Lora
- 모델 : LLaMa, Alpaca, GPT4ALL, bark

#### ⭐️⭐️ 웨이팅 서비스
- Golang 을 이용한 웨이팅 서비스 개발
- QR 코드와 바코드를 이용해 직관적이고 간단한 서비스
- 세션 등을 이용해 복잡한 절차 없이 사용자 인증
- [**프로젝트 상세로 이동 🚀**](/docs/project/index/order-by/)

#### ⭐️ 포트폴리오 홈페이지 개발
- Docusaurus 를 이용한 사이트 구축
- React, CSS, Javascript 를 이용한 커스터마이징

#### ⭐️ 유튜브 운영
- 개발 관련 유튜브 채널 운영
- 문서로 제한적인 부분을 영상으로 보완
- [**유튜브로 이동 🚀**](https://youtube.com/@dingco.lou2)

#### ⭐️ Playwright, Selenium 를 이용한 웹 자동화
    `,
    tags: ["Django", "GO", "AWS", "Postgresql", "MongoDB", "Redis", "RabbitMQ", "React", "Docker", "k8s", "LLama"]
  },
  {
    title: "**의 **",
    period: "2022년 8월 ~",
    description: `
---

#### ⭐️⭐️ 밀리 5.0 대규모 업데이트 개발
- **피드**
  - 여러 콘텐츠를 한 곳에 표시
  - 데이터 : ElasticSearch
  - 부분적 캐싱 : Memcached
  - 무한 스크롤
- **마이클립**
  - 메뉴별 바로가기 기능
  - 부분적 캐싱 : Memcached

#### ⭐️ API 성능 향상
- 구조 변경
  - ORM 구조 변경 : 최소한의 데이터를 이용한 연산
  - Pagination Class 오버라이딩을 통한 불필요한 연산 제거
- 캐시 구조 개선
  - 도서 상세페이지 및 기타 지연 API에 적용
  - 아래와 같은 캐싱 구조 변경으로 효율성 향상
  - 참고
  ![cache](/img/caching.png)

#### ⭐️ KT 그룹내 AI 해커톤 참여
- 본선 진출(3인 1팀, 115팀 중 20팀 이내)
- 데이터 전처리에 참여
- 네크워크 알고리즘을 통한 결과 도출

#### ⭐️ 레거시 이전(PHP > Django)
- 뷰어 Open/Close API
  - 뷰어 기록 생성
  - RDBMS, Kinesis, Message Queue 를 통한 데이터 저장

#### ⭐️ 데이터베이스 라우팅 세분화
- Read, Write 분리 / Slave 엔드포인트 활용
- 라우터 클래스내 Unmanaged Table app_label 정리
- 특정 API만 리플리카를 적용하는 기능 추가

#### ⭐️⭐️ 출간 플랫폼 개발
- 일반인이 작품을 만드는 서비스 개발
- 작품 관련 CRUD API 개발
- 캐싱을 이용한 성능 향상

#### ⭐️ 콘텐츠 관리
- DRM
  - NCG DRM 패키징
  - Token 생성 및 발급
- 오디오 관리(ffmpg)
  - Meta 데이터를 이용한 오디오 병합
  - Python \`pydub\` 을 이용한 오디오 관리

#### ⭐️⭐️ 챌린지 프로젝트 참여
- 개별 챌린지 개발
  - 집중해서 책 읽기
  - 인생책 고르기
  - 피드, 챌린지 시작 등
- 챌린지 운영 관련 API 개발

#### ⭐️⭐️⭐️ 신규 어플리케이션 준비
- 전체적인 프로젝트 구조 설계
  - Django, Celery 운영
  - 폴더 구조 설계
  - 환경 분리(local, develop, staging, production)
  - MSA 고려하여 내외부 API 구분
  - DB/캐싱 구조 설계
  - Response 구조 설계
- 라이브러리 개발, 선정 및 적용
- 기술 공유, 프로젝트 관련 교육 진행

---
  `,
    tags: ["Django", "GO", "Mysql", "ElasticSearch", "Redis", "Memcached", "Kinesis", "Kafka", "DRM", "SSO", "ISMS", "Sentry", "JIRA", "Confluence"],
  },
  {
    title: "페이워치",
    period: "2021년 9월 ~ 2022년 8월",
    description: `
---

#### ⭐️⭐️ 회원 가입 프로세스 개선
- 기존 프로세스 개선
  - [기존] 회사 관리자 / 근로자 구분하여 가입
  - [개선] 회사 관리자 없이 **근로자만 가입 할 수 있는 프로세스** 추가 (건강 보험 조회 API 를 이용하여 근로자 인증)
- PASS 인증에서 휴대폰 문자 인증으로 변환
- 제휴 기업들에 대한 별도 가입 프로세스 추가
    - 식권 대장 : 선지급 한도 제한 등의 별도 작업 진행
    - 외식인 : 관리자 자동 가입을 통해 근로자 정보 조회
        - Oauth2 기반 Client 키 정보 제공(해당 키로 외부 API 에 사용 가능한 토큰 생성)
        - AES Cipher 키 를 전달(해당 키로 외식인측 사용자 인덱스와 회사 정보들을 암호화하여 전달)
        - 위 두 정보를 이용하여 회원 가입 여부 확인 및 가입 / 로그인 진행
- 자동 프로모션 혜택 제공 기능 추가
- 다양한 경우의 수에 대한 테스트 코드 작성

#### ⭐️ 출퇴근 인증 방식 전환
- 기존
  - 각 회사별 QR 코드를 생성하여 해당 코드를 통해 출퇴근 조회
- 개선
  - 회사 근무지 주소의 위 / 경도를 조회
  - 현재 사용자의 위치와 범위 오차 확인
  - 지정된 거리 미만인 경우 출근으로 인정

#### ⭐️ 래거시 개선
- 데이터베이스
  - 기존 통합된 데이터베이스 **테이블 정규화**
  - 확장을 고려하여 테이블 분리
  - 데이터 암호화 방식 전환 (Django ORM Encrypt 외부 라이브러리 사용)
- API(PHP > Django)
  - 계약서 세부 정보 변경 API 이전
  - 회사 관리자 메뉴 API 이전 및 추가 개발

#### ⭐️ 외부 서비스 개발
- 공통
  - Oauth2 기반 Client 키 정보를 이용한 토큰 조회 API
  - AES Cipher 키를 이용한 암호화 데이터 전달
  - Throttling 을 통한 무분별한 호출 방지
- 유베이스
  - 근로자 정보 및 가상 계좌 조회
  - 근로자 정보 변경(정보 변경에 따른 참조 객체 연동)

#### ⭐️ Develop Server 구축
- CodeCommit : CodeCommit 저장소에 특정 브랜치 수정 후 PR > Push
- AWS Lambda : 수정된 사실에 대한 정보 전달
- FastAPI : Webhook 으로 Develop 서버의 FastAPI 호출
- Docker : docker-compose 를 재실행 등을 통해 내부 코드 동기화

#### ⭐️ 개발 관련 문서화
- 개발 관련 문서
  - 개발 관련 정보 작성(담당자 및 기술 스택 등)
  - 소요 및 일정 작성
  - 모델 및 API 에 대한 정보 작성
- 개발 공부 공유 문서
  - 개인적으로 공부한 내용에 대한 공유 문서 작성

#### ⭐️ 회사 업무 지원 기능 추가
- 할 일 관리
  - 관리자의 업무 생성 및 관리 기능 추가
  - 근로자에게 업무 지시 및 운영 기능 추가
  - 지시 받은 업무에 대한 처리(사진 업로드 등) 기능
  - 반복 업무 및 특정일 업무 등 다양한 기간 활용

#### ⭐️⭐️ 백오피스
- 통합 검색
  - 다양한 검색 조건을 만족할 수 있는 모듈 제작
  - 여러 데이터 조회에서 사용 할 수 있도록 범용적 구조
  - 암호화된 데이터 조회의 성능 향상을 위해 캐시 사용
- 일별 업무 기록
  - 일별로 진행되는 업무에 대한 기록
  - 개인 회고 짧게 작성

#### ⭐️⭐️ CI/CD 구축
- AWS CodePipeline : CodePipeline 을 통해 CICD 구성
- CodeCommit : CodeCommit 저장소에 특정 브랜치 수정 후 PR > Push
- AWS CodeBuild : CodeBuild 를 통해 Docker Image 빌드
- Beanstalk : Beanstalk 을 통해 배포된 Docker Image 를 배포
- ALB, Route53 : ALB 를 통해 배포된 서비스에 대한 도메인 연결
- CloudWatch : CloudWatch 를 통해 배포된 서비스의 로그 확인
- Sentry : Sentry 를 통해 배포된 서비스의 에러 확인

---
  `,
    tags: ["Django", "FastAPI", "Sentry", "Postgres", "Celery", "AWS", "OAuth2.0", "VueJS", "RabbitMQ", "Linux", "Notion"],
  },
  {
    title: "마켓비",
    period: "2017년 6월 ~ 2021년 8월",
    description: `
---

#### ⭐️ 서버 환경
- 카페24 가상 서버 호스팅(Ubuntu 서버)
- AWS EC2 기본 서버 사용
- 서버 내 Docker 를 이용한 MySQL 사용

#### ⭐️⭐️ 스케쥴링 서비스
- Crontap 을 이용해 정기적인 스크립트 실행
- Google Apps Script 를 이용해 기간 단위 연속된 API 호출
- Celery Beat 를 이용해 Django 서비스 스케쥴링

#### ⭐️ 배포
- docker-compose 를 이용하여 Django App 배포
- letsencrypt-nginx-proxy 컨테이너 등을 이용해 라우팅 및 https 적용
- Jenkins 를 이용해 배포 자동화

#### ⭐️⭐️⭐️ Selenium 와 BS4 등 을 이용한 웹 자동화
- 각 판매처별 매출 일별 매출 정보 조회
- 위탁 업체 포인트 전환 비용 입금 내역 확인 및 전환, 세금계산서 발행 등
- 온라인에 등록된 미제휴 업체 탐색 기능 등

#### ⭐️ C# 을 이용한 MS 오피스 자동화
- 엑셀 기본 함수 외 추가 함수 개발
- **제품명 검색 기능 추가** (여러곳에서 다르게 사용되는 이름의 제품명을 데이터베이스에 저장된 제품명으로 변환)
- 회사에 맞춰 재정의된 수식을 자동 대입하여 기록하는 기능 추가
- 특정 데이터에 대해 자동으로 구조 및 데이터 타입을 변형시켜주는 기능 추가

#### ⭐️ **구글 API** 를 이용해 구글 오피스 자동화
- 외부에서 수집된 데이터를 이용해 ‘일별 매출 통합 관리’ 구글 시트 동기화
- 데이터베이스에 저장된 내용을 특정 간격으로 구글시트에 업데이트

#### ⭐️⭐️ **카페24 API** 를 이용한 자동화
- ‘배송중’인 주문건의 현재 배송 상태를 별도로 확인하여 업데이트
- 고객 문의 중 특정 키워드가 포함된 문의가 등록되는 경우 메일 등 별도 메신저로 알람
- 판매 내역을 받아와 백오피스로 전달하여 추이 분석에 사용
- 위탁 업체별 데이터를 각각 분리하여 정리 후 출력 지원

#### ⭐️ **사방넷 API** 를 이용한 데이터파이프라인 구성
- 각 판매처에서 판매된 데이터를 수집
- 수집된 데이터의 제품명을 데이터베이스내 등록된 제품명으로 변경
(행사 제품이나 각 몰별 제품명 특징을 살리다보니 몰별 제품명이 상이)
- 다른 엑셀 형식을 동일한 형식으로 변환
- 같이 제품끼리 묶어 데이터베이스에 누적
- 배송 형태 및 기타 요청 문구에따라 예외 처리

#### ⭐️⭐️ **재고 관리**
- 바코드 인식기를 연결하여 재고 관리시 사용
- 엑셀 및 구글시트와 연동하여 다양한 형태로 관리
- 해외 발주 데이터 간소화
(부서별 단계 구분 작성)
- 자동 번역을 통한 해외 전송 데이터 출력

#### ⭐️ 직원 관리
- 직원 등록 및 정보 변경 기능
- 메뉴 접근 권한 설정
- 암호화를 통해 공통 계정 관리
(계정별 담당자 지정)

#### ⭐️⭐️⭐️ **매장 관리**
- 매장 입 / 출고 내역 관리
- 판매 내역 관리
- 매출 및 카드 사용 내역 관리
- 일별 업무 보고 자동 정리 출력 기능

#### ⭐️ 쇼핑몰 관리
- 작성된 리뷰를 손쉽게 분류 할 수 있도록 인터페이스 구성
- 문의 답변 기능 구현 (리뷰의 키워드를 분석해 예시 답변 추천, 자주하는 답변 저장 등)

---
  `,
    tags: ["C#", "WPF", "Django", "RPA", "AWS", "Docker", "Mysql", "ExternalAPI", "Selenium", "VueJS"],
  },
];

export default function TimeLine() {
  return (
    <>
      <div className={styles.container}>
        <h2>{historyTitle}</h2>
        {timelineData.map((item, index) => (
          <div key={index}>
            <div className={styles.row}>
              <div className={styles.col1}>
                <div className={styles.timelineIcon}>{timelineIcons[index]}</div>
              </div>
              <div className={styles.col2}></div>
            </div>
            <div className={styles.row}>
              <div className={styles.col05Left}></div>
              <div className={styles.col05Right}></div>
              <div className={styles.col2}>
                <div>
                  <h3>{item.title}</h3>
                  <small>{item.period}</small>
                  <div className={styles.timelineDescription}>
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                  </div>
                  <div className={styles.tag}>
                    {item.tags.map(tag => (
                      <code key={tag}>{tag}</code>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}