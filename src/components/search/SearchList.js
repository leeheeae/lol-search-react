import React from 'react';

const SearchList = ({ summoner }) => {
  return (
    <>
      {summoner !== null && (
        <div>
          <div>아이디: {summoner.id}</div>
          <div>아이디: {summoner.accountId}</div>
          <div>아이디: {summoner.puuid}</div>
          <div>아이디: {summoner.name}</div>
          <div>아이디: {summoner.profileIconId}</div>
          <div>아이디: {summoner.revisionDate}</div>
          <div>아이디: {summoner.summonerLevel}</div>
        </div>
      )}
    </>
  );
};

export default SearchList;
