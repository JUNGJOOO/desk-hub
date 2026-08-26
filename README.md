# 하상인 — 작가 · 행정사

문장을 짓는 작가이자, 서류를 세우는 행정사 **하상인**의 개인 소개 웹사이트입니다.

## 소개

- 작가로서의 활동(출간 도서, 브런치 연재)과 행정사로서의 전문 업무(성공사례, 강연)를 함께 소개합니다.
- 강연 섭외 문의를 받을 수 있는 신청 폼과 자주 묻는 질문(FAQ)을 제공합니다.

## 페이지 구성

| 파일 | 페이지 | 설명 |
|---|---|---|
| `index.html` | 홈 | 작가·행정사 소개 메인 페이지 |
| `writer.html` | 작가 | 작가 프로필 및 활동 소개 |
| `admin.html` | 행정사 | 전문 업무 분야, 성공사례 |
| `books.html` | 출간 도서 | 출간한 책 목록 |
| `book.html` | 도서 상세 | 개별 도서 소개 페이지 |
| `lecture.html` | 강연문의 | 강연 주제, 강연 실적, 섭외 신청 폼, FAQ |

## 기술 스택

- **HTML / CSS / Vanilla JavaScript** — 프레임워크 없는 정적 웹사이트
- **Google Fonts** — Song Myung, IBM Plex Sans KR

## 로컬 실행

저장소에 포함된 정적 서버 스크립트로 바로 실행할 수 있습니다.

```bash
node .static-server.js
```

실행 후 브라우저에서 [http://localhost:8080](http://localhost:8080) 접속

## 디렉터리 구조

```
desk-hub/
├── index.html          # 홈
├── writer.html         # 작가 소개
├── admin.html          # 행정사 소개
├── books.html          # 출간 도서 목록
├── book.html           # 도서 상세
├── lecture.html        # 강연문의
├── css/                # 공통 및 페이지별 스타일
├── js/
│   └── nav.js          # 네비게이션 인터랙션
├── images/             # 프로필, 도서 표지, 강연 사진 등
└── .static-server.js   # 로컬 개발용 정적 서버
```
