import { DirectoryTypes } from "./directory.types";

export const filterByCategory = (payload) => ({
  type: DirectoryTypes.FILTER_BY_CATEGORY,
  payload,
});

export const loadData = (payload) => ({
  type: DirectoryTypes.LOAD_DATA,
  payload,
});

export const loadNewPage = (payload) => ({
  type: DirectoryTypes.LOAD_NEW_PAGE,
  payload,
});

export const loadExactPage = (payload) => ({
  type: DirectoryTypes.LOAD_EXACT_PAGE,
  payload,
});
