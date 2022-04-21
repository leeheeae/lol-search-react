import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import {
  changeField,
  summonerSearch,
  summonerReague,
  summonerReagueClear,
} from '../../modules/summoner';
import { useNavigate } from 'react-router-dom';

const SearchContainer = ({ big }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { summonerInput, summoner } = useSelector(({ summoner }) => ({
    summoner: summoner.summoner,
    summonerInput: summoner.summonerInput,
  }));

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //2글자일 경우 공백
    if (summonerInput.length === 2) {
      dispatch(summonerSearch(summonerInput.split('').join(' ')));
    } else {
      dispatch(summonerSearch(summonerInput));
    }
    e.target.reset();
    navigate(`/search`);
  };

  useEffect(() => {
    if (!summoner) return;
    dispatch(summonerReague(summoner.id));

    return () => {
      dispatch(summonerReagueClear());
    };
  }, [summoner]);

  return <Search onChange={onChange} onSubmit={onSubmit} big={big} />;
};

export default SearchContainer;
