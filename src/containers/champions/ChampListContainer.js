import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { champSearch } from '../../modules/champ';
import ChampList from '../../components/champions/ChampList';

const ChampListContainer = () => {
  const dispatch = useDispatch();

  const { champInfo } = useSelector(({ champ }) => ({
    champInfo: champ.champInfo,
  }));

  useEffect(() => {
    dispatch(champSearch());
  }, []);

  return (
    <ChampList
      champInfo={Object.keys(champInfo).map((key) => champInfo[key])}
    />
  );
};

export default ChampListContainer;
