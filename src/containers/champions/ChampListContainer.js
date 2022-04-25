import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { champSearch } from '../../modules/champ';
import ChampList from '../../components/champions/ChampList';

const ChampListContainer = () => {
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickTab = (index) => {
    setActiveIndex(index);
  };

  const { champInfo } = useSelector(({ champ }) => ({
    champInfo: champ.champInfo,
  }));

  useEffect(() => {
    dispatch(champSearch());
  }, []);

  return (
    <ChampList
      champInfo={Object.keys(champInfo).map((key) => champInfo[key])}
      onClickTab={onClickTab}
      activeIndex={activeIndex}
    />
  );
};

export default ChampListContainer;
