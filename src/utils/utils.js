// eslint-disable-next-line no-sequences,no-return-assign,no-param-reassign
export const mapByKey = (arr, key) => (arr ? arr.reduce((map, element) => (map[element[key]] = element, map), {}) : {});
