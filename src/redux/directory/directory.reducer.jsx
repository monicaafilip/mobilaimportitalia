import { DirectoryTypes } from "./directory.types";
import data from "./MOCK_DATA.json";
const INITIAL_STATE = {
  appliedFilters: [],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryTypes.FILTER_BY_CATEGORY: {
      console.log(state);
      let newState = Object.assign({}, state);
      let category = action.payload.category;
      let filteredValues = state.products.filter((product) => {
        return product.filter.toLowerCase().includes(category);
      });

      let appliedFilters = state.appliedFilters;

      if (category) {
        appliedFilters = addFilterIfNotExists(
          DirectoryTypes.FILTER_BY_CATEGORY,
          appliedFilters
        );

        newState.filteredProducts = filteredValues;
        newState.valuesPerPage = newState.filteredProducts.slice(
          0,
          newState.countPerPage
        );
        newState.filteredCount = newState.filteredProducts.length;
        newState.filteredPages = Math.ceil(
          newState.filteredCount / newState.countPerPage
        );
      } else {
        appliedFilters = removeFilter(
          DirectoryTypes.FILTER_BY_CATEGORY,
          appliedFilters
        );

        if (appliedFilters.length === 0) {
          newState.filteredProducts = newState.products;
          newState.filteredCount = newState.filteredProducts.length;
          newState.filteredPages = Math.ceil(
            newState.filteredCount / newState.countPerPage
          );
        }
      }
      return newState;
    }
    case DirectoryTypes.LOAD_DATA: {
      let products = data;
      let count = products.length;
      let countPerPage = action.payload.countPerPage;

      //round up
      let totalPages = Math.ceil(count / countPerPage);

      return {
        ...state,
        products,
        filteredProducts: products,
        valuesPerPage: products.slice(0, countPerPage),
        currentCount: countPerPage,
        countPerPage,
        totalCount: count,
        currentPage: 1,
        totalPages: totalPages,
        filteredPages: totalPages,
      };
    }
    case DirectoryTypes.LOAD_EXACT_PAGE: {
      const exactPageState = Object.assign({}, state);
      const exactPage = action.payload.page;
      let upperCountExact = exactPageState.countPerPage * exactPage;
      let lowerCountExact = upperCountExact - exactPageState.countPerPage;

      let exactProducts = exactPageState.filteredProducts.slice(
        lowerCountExact,
        upperCountExact
      );
      exactPageState.valuesPerPage = exactProducts;
      exactPageState.currentCount = upperCountExact;
      exactPageState.currentPage = exactPage;
      window.history.pushState(
        { page: 1 },
        "title 1",
        `?page=${exactPageState.currentPage}`
      );

      return exactPageState;
    }
    case DirectoryTypes.LOAD_NEW_PAGE: {
      //Clone the previous state
      let loadNewPageState = Object.assign({}, state);
      //How many pages should be added. Will always be 1 or -1
      let addPages = action.payload.page;
      //add it to the current
      loadNewPageState.currentPage += addPages;

      let perPage = loadNewPageState.countPerPage;

      let nextProducts;
      if (addPages === 1) {
        let upperCount = loadNewPageState.currentCount + perPage;
        let lowerCount = loadNewPageState.currentCount;

        loadNewPageState.currentCount += loadNewPageState.countPerPage;
        nextProducts = loadNewPageState.filteredProducts.slice(
          lowerCount,
          upperCount
        );
      }

      if (addPages === -1) {
        let upperCount = loadNewPageState.currentCount;
        let lowerCount = loadNewPageState.currentCount - perPage;

        loadNewPageState.currentCount -= loadNewPageState.countPerPage;
        nextProducts = loadNewPageState.filteredProducts.slice(
          lowerCount - perPage,
          upperCount - perPage
        );
      }

      loadNewPageState.valuesPerPage = nextProducts;
      window.history.pushState(
        { page: 1 },
        "title 1",
        `?page=${loadNewPageState.currentPage}`
      );
      return loadNewPageState;
    }
    default:
      return state;
  }
};

export default directoryReducer;

function addFilterIfNotExists(filter, appliedFilters) {
  if (appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);
  }

  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  if (appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
  }
  return appliedFilters;
}
