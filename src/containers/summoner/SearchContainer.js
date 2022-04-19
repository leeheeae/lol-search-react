import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
// import SearchList from '../../components/search/SearchList';
import { changeField, summonerSearch } from '../../modules/summoner';
import { useNavigate } from 'react-router-dom';

const SearchContainer = () => {
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
    dispatch(summonerSearch(summonerInput));
    e.target.reset();
    navigate(`/search`);
  };

  return <Search onChange={onChange} onSubmit={onSubmit} />;
};

export default SearchContainer;
