import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ChampInfo from '../../components/champions/ChampInfo';
import { champInfoSearch } from '../../modules/champ';

const ChampInfoContainer = () => {
  const dispatch = useDispatch();
  let params = useParams();

  const { champInfo, loading } = useSelector(({ champ, loading }) => ({
    champInfo: champ.champInfo.data,
    loading: loading['champ/CHAMP_INFO'],
  }));

  useEffect(() => {
    dispatch(champInfoSearch(params.name));
  }, [params.name, dispatch]);

  if (!champInfo) {
    return null;
  }

  if (loading) return <div>로딩중...</div>;

  return <ChampInfo champInfo={champInfo[params.name]} loading={loading} />;
};

export default ChampInfoContainer;
