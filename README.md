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

### 검색 페이지

##### 필요한 데이터

1. summoner 정보

- `id`, `accountId`, `puuid`, `name`, `profileIconId`, `revisionDate`, `summonerLevel`

2. summonerID + Reague 매칭

- summoner의 id 값을 이용하여 reague 매칭
  - `leagueId`, `queueType`,`tier`, `rank`, `leaguePoints`, `wins`,`losses`
- queueType은 솔로랭크, 자유랭크만 표현하기위해 데이터를 내려보낼 때 fillter로 TFT 정보는 걸러주기

3. 티어별 이미지

- `https://developer.riotgames.com/docs/lol#data-dragon`에서 이미지 받아오기
- 티어 이미지 저장 후 로컬에 저장한 후 매칭한 reague의 tier값을 확인하여 해당 티어별 이미지 적용하기
  - 해당 파일의 이름을 전체 바꿔도 되지만 스크립트 기능을 좀 더 활용해보기 위해 전체를 소문자로 바꾼 후 첫글자만 대문자로 표시되도록 함수 만들어서 설정
    - `toLowerCase()`, `toUpperCase()`,`slice()` 사용
- 매칭하여 파일을 설정해야하기 때문에 import 하여 사용하지 않고 `process.env.PUBLIC_URL`을 이용하여 각 파일 경로 설정

4. 인게임 정보 확인 데이터

- 인게임정보 확인하기 버튼을 클릭했을 때 게임중인 경우에만 데이터 표시
  - 사용중인 챔피언, 스펠, 아이디를 표시
  - 게임중이 아닐 경우 게임중이 아닙니다. 라는 메세지 표시
  - 레드팀, 블루팀 구분하여 데이터 내려주기
  - 게임모드와 게임 길이 데이터를 받아와서 표시
