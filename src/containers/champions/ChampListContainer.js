import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { champSearch } from '../../modules/champ';
import ChampList from '../../components/champions/ChampList';

const ChampListContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickTab = (index) => {
    setActiveIndex(index);
  };

  const onClickChamp = (name) => {
    navigate(`/champ/${name}`);
  };

  const { champList, loading } = useSelector(({ champ, loading }) => ({
    champList: champ.champList.data,
    loading: loading['champ/CHAMP_SEARCH'],
  }));

  useEffect(() => {
    dispatch(champSearch());
  }, [dispatch]);

  if (!champList) {
    return null;
  }

  if (loading) return <div>로딩중...</div>;

  return (
    <ChampList
      champInfo={Object.keys(champList).map((key) => champList[key])}
      onClickTab={onClickTab}
      onClickChamp={onClickChamp}
      activeIndex={activeIndex}
    />
  );
};

export default ChampListContainer;
