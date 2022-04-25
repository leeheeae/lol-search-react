# 라이엇 API를 이용한 LOL 소환사 전적 검색 사이트

> > Toy 프로젝트

#### 사용 라이브러리

`react`, `react-helmet-async`, `react-redux`, `redux`, `react-router-dom`, `react-actions`, `redux-devtools-extension`, `redux-saga`, `styled-components`, `axios`, `qs`

---

## Pages

1.메인페이지 - 소환사명으로 검색하여 정보 확인하기

### 메인 페이지

- 컴포넌트 : 검색창, 검색리스트
- API : `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${process.env.REACT_APP_RIOT_KEY}`
- react-actions
  - 소환사명 인풋 입력 액션
    - 입력한 input 값을 summonerInput에 넣음
  - SUMMONER_SEARCH API 처리
    - 성공 값을 summoner에 넣음
    - 실패 값은 error에 넣음
- Redux-saga를 이용하여 비동기 처리
- api 처리 완료하면 검색 리스트에 나타나도록 설정

#### 검색 페이지

##### 필요한 데이터

- summoner 정보
  - `id`, `accountId`, `puuid`, `name`, `profileIconId`, `revisionDate`, `summonerLevel`
- summonerID + Reague 매칭
- 티어별 이미지 변경
-
