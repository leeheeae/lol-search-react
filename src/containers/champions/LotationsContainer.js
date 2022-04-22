import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LotationsTemplat from '../../components/champions/LotationsTemplat';
import { champSearch, loationsChamp } from '../../modules/champ';

const LotationsContainer = ({ marginTop }) => {
  const dispatch = useDispatch();

  const { champInfo, loationsChamps } = useSelector(({ champ }) => ({
    champInfo: champ.champInfo,
    loationsChamps: champ.loationsChamps,
  }));

  useEffect(() => {
    dispatch(champSearch());
    dispatch(loationsChamp());
  }, []);

  return (
    <LotationsTemplat
      champInfo={champInfo}
      marginTop={marginTop}
      loationsChamps={loationsChamps.freeChampionIds}
    />
  );
};

export default LotationsContainer;
