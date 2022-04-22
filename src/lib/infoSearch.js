export const infoSearchBox = (data, target) => {
  const result = Object.keys(data)
    .map((key) => data[key])
    .filter((itemKey) => itemKey.key === target.toString());
  return result[0];
};

//태그 종류 찾기
export const tagCheck = (champ) => {
  const tags = champ.map((c) => c.tags);
  const tagsArr = Object.assign(
    {},
    tags.map((item) => item[0]),
  );
  const tagsArrValues = Object.values(tagsArr);
  return tagsArrValues.filter((v, i) => tagsArrValues.indexOf(v) === i);
};
