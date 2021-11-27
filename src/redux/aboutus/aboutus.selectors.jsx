import { createSelector } from "reselect";

const selectTextAbout = (state) => state.textabout;

export const selectText = createSelector(
  [selectTextAbout],
  (textabout) => textabout.text
);