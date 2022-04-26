import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Lotations from '../../components/champions/Lotations';
import { champSearch, loationsChamp } from '../../modules/champ';

const LotationsContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { champList, loationsChamps, loading } = useSelector(
    ({ champ, loading }) => ({
      champList: champ.champList.data,
      loationsChamps: champ.loationsChamps,
      loading: loading['champ/LOATATIONS_CHAMP'],
    }),
  );

  const onClickChamp = (name) => {
    navigate(`/champ/${name}`);
  };

  useEffect(() => {
    dispatch(champSearch());
    dispatch(loationsChamp());
  }, []);

  if (!champList || !loationsChamps) {
    return null;
  }

  if (loading) return <div>로딩중...</div>;

  return (
    <Lotations
      champList={champList}
      loationsChamps={loationsChamps.freeChampionIds}
      onClickChamp={onClickChamp}
    />
  );
};

export default LotationsContainer;
