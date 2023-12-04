import { client } from './BaseApi';

export const getStrandCategoriesApi = async (strandId) => {
  return client.callApi({
    url: `/strands/${strandId}`,
  });
};

export const getStrandDetailApi = async (strandId, catRef, page = 0) => {
  return client.callApi({
    url: `/strands/${strandId}/categories/${catRef}`,
    params: { page },
  });
};

export const getCourseDetailApi = async (courseId) => {
  return client.callApi({
    url: `/learning_materials/csl/${courseId}`,
  });
};

/**
 * @param {string} query
 * @param {number} page
 * @returns
 */
export const getSearchApi = async (query, page = 0) => {
  return client.callApi({
    url: `/search`,
    params: { query, page },
  });
};
