import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../../components/search/Search';
import { changeField } from '../../modules/summoner';
import { useNavigate } from 'react-router-dom';

const SearchContainer = ({ big }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { summonerInput } = useSelector(({ summoner }) => ({
    summonerInput: summoner.summonerInput,
  }));

  const onChange = (e) => {
    const { value } = e.target;
    dispatch(changeField({ value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    navigate(`/search/${summonerInput}`);
  };

  return <Search onChange={onChange} onSubmit={onSubmit} big={big} />;
};

export default SearchContainer;
