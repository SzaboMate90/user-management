export const isEmptyObject = (obj : object) => Object.keys(obj).length === 0 && obj.constructor === Object;
export const getRandomId = () => Math.random().toString(36).substr(2, 9);