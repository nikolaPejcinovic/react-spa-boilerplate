const ENV = process.env.REACT_APP_ENV;

export const setValue = (k, v) =>
  localStorage.setItem(`${k}_${ENV}`, JSON.stringify(v));

export const getValue = k => JSON.parse(localStorage.getItem(`${k}_${ENV}`));

export const removeValue = k => localStorage.removeItem(`${k}_${ENV}`);
