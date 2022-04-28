//챔피언 태그 내역
export const champTagsConfig = {
  Fighter: '전사',
  Mage: '마법사',
  Assassin: '암살자',
  Marksman: '원거리딜러',
  Tank: '탱커',
  Support: '서포터',
};

export const lankNameConfig = {
  RANKED_SOLO_5x5: '솔로랭크 5X5',
  RANKED_FLEX_SR: '자유랭크 5X5',
};

export const gameModeConfig = {
  CLASSIC: '소환사의 협곡',
  ODIN: '',
  ARAM: '무작위 총력전',
  TUTORIAL: '튜토리얼',
  URF: 'URF',
  DOOMBOTSTEEMO: 'Bot',
  ONEFORALL: '',
  ASCENSION: '',
  FIRSTBLOOD: '',
  KINGPORO: '전설의 포로왕',
  SIEGE: '',
  ASSASSINATE: '',
  ARSR: '무작위 총력전',
  DARKSTAR: '',
  STARGUARDIAN: '별 수호자 침공',
  PROJECT: '프로젝트: 과충전모드',
  GAMEMODEX: '돌격! 넥서스',
  ODYSSEY: '오디세이:구출',
  NEXUSBLITZ: '뒤틀린 숲',
  ULTBOOK: '궁극기 주문서',
};

//챔피언 리스트 탭
export const champListTabs = [
  { name: '전체', tag: '' },
  { name: '암살자', tag: 'Assassin' },
  { name: '전사', tag: 'Fighter' },
  { name: '마법사', tag: 'Mage' },
  { name: '원거리딜러', tag: 'Marksman' },
  { name: '서포터', tag: 'Support' },
  { name: '탱커', tag: 'Tank' },
];

//match Game Type
export const matchGameType = ['', 'ranked', 'normal', 'tourney', 'tutorial'];

//RecordTabs
export const RecordTabs = ['전체', '솔로랭크', '자유랭크', '일반', '총력전'];

//QUEUETYPE
const QUEUETYPE = {
  400: 'norm', //Normal Draft Pick
  420: 'solo',
  430: 'norm',
  440: 'flex',
  450: 'aram',
  700: 'clash',
  800: 'ai', // Deprecated
  810: 'ai', // Deprecated
  820: 'ai', // Deprecated
  830: 'ai',
  840: 'ai',
  850: 'ai',
  900: 'urf',
  920: 'poro',
  1020: 'ofa',
  1300: 'nbg',
  1400: 'usb', // Ultimate Spellbook
  2000: 'tut',
  2010: 'tut',
  2020: 'tut',
};

//QUEUETYPE ko
const ko = {
  solo: '솔랭',
  norm: '일반',
  aram: '칼바람',
  flex: '자랭',
  nbg: '돌넥',
  usb: '궁주문서',
  urf: 'URF',
  ofa: '단일',
  ai: 'AI대전',
  poro: '포로왕',
  tut: '튜토리얼',
  etc: '기타',
  clash: '격전',
};

const key = Object.values(QUEUETYPE);
const key2 = Object.entries(QUEUETYPE);

//QUEUETYPE MATCH
export const quequeTyepMatch = (key) => {
  const value = QUEUETYPE[key];
  const result = ko[value];

  console.log(result);
};
