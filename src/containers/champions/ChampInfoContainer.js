import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChampInfo from '../../components/champions/ChampInfo';
import { champSearch } from '../../modules/champ';

const ChampInfoContainer = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const { champInfo } = useSelector(({ champ }) => ({
    champInfo: champ.champInfo,
  }));

  useEffect(() => {
    dispatch(champSearch(params.name));
  }, []);

  return <ChampInfo champInfo={champInfo[params.name]} />;
};

export default ChampInfoContainer;
