import en from './languages/en.json';

// TODO: i18n implementation??
export const getCopy = (copyKey) => {
  return en[copyKey] || {};
};
