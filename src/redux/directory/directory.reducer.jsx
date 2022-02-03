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

      return updateState(
        state,
        newState,
        filteredValues,
        category,
        DirectoryTypes.FILTER_BY_CATEGORY
      );
      // let appliedFilters = state.appliedFilters;
      // console.log(appliedFilters);
      // let index = -1;
      // if (category) {
      //   appliedFilters = addFilterIfNotExists(
      //     DirectoryTypes.FILTER_BY_CATEGORY,
      //     appliedFilters,
      //     index
      //   );

      //   console.log(appliedFilters);
      //   console.log(index);
      //   if (!appliedFilters) return newState;

      //   if (index === -1)
      //     appliedFilters[appliedFilters.length - 1]["values"] = filteredValues;
      //   else appliedFilters[index]["values"] = filteredValues;

      //   console.log(filteredValues);

      //   newState.appliedFilters = appliedFilters;
      //   newState.filteredProducts = filteredValues;
      //   newState.valuesPerPage = newState.filteredProducts.slice(
      //     0,
      //     newState.countPerPage
      //   );
      //   newState.filteredCount = newState.filteredProducts.length;
      //   newState.filteredPages = Math.ceil(
      //     newState.filteredCount / newState.countPerPage
      //   );
      // } else {
      //   appliedFilters = removeFilter(
      //     DirectoryTypes.FILTER_BY_CATEGORY,
      //     appliedFilters
      //   );

      //   if (appliedFilters.length === 0) {
      //     newState.filteredProducts = newState.products;
      //     newState.filteredCount = newState.filteredProducts.length;
      //     newState.filteredPages = Math.ceil(
      //       newState.filteredCount / newState.countPerPage
      //     );
      //   }
      // }
      // return newState;
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

function updateState(state, newState, filteredValues, payloadValue, type) {
  let appliedFilters = state.appliedFilters;

  console.log(newState.appliedFilters);
  console.log(appliedFilters);
  if (payloadValue) {
    let index = -1;
    appliedFilters = addFilterIfNotExists(type, appliedFilters, index);

    console.log(appliedFilters);
    if (!appliedFilters) return newState;

    if (index === -1)
      appliedFilters[appliedFilters.length - 1]["values"] = filteredValues;
    else appliedFilters[index]["values"] = filteredValues;

    newState.appliedFilters = appliedFilters;

    if (appliedFilters.length > 1) {
      filterWithManyFilters(appliedFilters, newState.filteredValues);
    } else newState.filteredProducts = filteredValues;

    if (!newState.filteredProducts) return newState;

    newState.filteredCount = newState.filteredProducts.length;
    newState.filteredPages = Math.ceil(
      newState.filteredCount / newState.countPerPage
    );
  } else {
    appliedFilters = removeFilter(type, appliedFilters);

    if (appliedFilters.length === 0) {
      newState.filteredProducts = newState.products;
    } else {
      filterWithManyFilters(appliedFilters, newState.filteredProducts);
    }
    newState.filteredCount = newState.filteredProducts.length;
    newState.filteredPages = Math.ceil(
      newState.filteredCount / newState.countPerPage
    );
  }
  newState.valuesPerPage = newState.filteredProducts.slice(
    0,
    newState.countPerPage
  );
  return newState;
}

function filterWithManyFilters(appliedFilters, finalFilteredValues) {
  if (!appliedFilters) return [];

  if (appliedFilters.length === 1) return appliedFilters[0]["values"];

  let index = 0;
  finalFilteredValues = appliedFilters[appliedFilters.length - 1]["values"];
  while (index < appliedFilters.length - 1) {
    let values = appliedFilters[index]["values"];

    finalFilteredValues = finalFilteredValues.filter(function (o1) {
      return values.some(function (o2) {
        return o1["id"] === o2["id"];
      });
    });
    index = index + 1;
  }
}

function addFilterIfNotExists(filter, appliedFilters, index) {
  // appliedFilters = [];
  console.log(appliedFilters);
  if (appliedFilters) {
    for (let i = 0; i < appliedFilters.length; i++)
      if (appliedFilters[i]["filter"] === filter) {
        index = i;
        break;
      }
    if (index === -1) {
      console.log("here");
      const obj = { filter: filter, values: [] };
      appliedFilters.push(obj);
    }
  }
  console.log(appliedFilters);
  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  if (appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
  }
  return appliedFilters;
}
