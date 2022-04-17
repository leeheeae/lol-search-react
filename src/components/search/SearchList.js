import React from 'react';

const SearchList = ({ summoner }) => {
  return (
    <>
      {summoner !== null && (
        <div>
          <div>아이디: {summoner.id}</div>
          <div>계정id: {summoner.accountId}</div>
          <div>puuid: {summoner.puuid}</div>
          <div>아이디: {summoner.name}</div>
          <div>아이콘: {summoner.profileIconId}</div>
          <div>개정날짜: {summoner.revisionDate}</div>
          <div>서머너레벨: {summoner.summonerLevel}</div>
        </div>
      )}
    </>
  );
};

export default SearchList;
