import { AppState } from "../types";
import {
  seriousFilterOptions,
  severityFilterOptions,
  relationshipFilterOptions,
  outcomeFilterOptions
} from "../pages/components/checkfilter/checkFilterOptions";
import datas from "../data.json";

export const initialState: AppState = {
  colors: ["green", "red", "blue", "orange"],
  datasOriginal: datas,
  groupVariable: "ARM",
  summarizedBy: "Events",
  searchTerm: "",
  SortColumn: [],
  prevalenceFilterRange: [0, 0],
  prevalenceFilterSelected: [0, 0],
  ageFilterRange: [0, 0],
  ageFilterSelected: [0, 0],
  seriousFilter: seriousFilterOptions,
  severityFilter: severityFilterOptions,
  relationshipFilter: relationshipFilterOptions,
  outcomeFilter: outcomeFilterOptions,
  expandedCategories: [],
  detailSearchTerm: "",
  detailSortColumn: [],
  detailResultsPerPage: 10
};
