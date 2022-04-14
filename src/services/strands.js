import { client } from './BaseApi';

export const getStrandCategoriesApi = async (strandId) => {
  return client.callApi({
    url: `/strands/${strandId}`,
  });
};
