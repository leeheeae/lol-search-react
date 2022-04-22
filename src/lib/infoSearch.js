export const infoSearchBox = (data, target) => {
  const result = Object.keys(data)
    .map((key) => data[key])
    .filter((itemKey) => itemKey.key === target.toString());
  return result[0];
};
