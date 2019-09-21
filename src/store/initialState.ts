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
  summarizedBy: "Participants",
  searchTerm: "",
  sortColumns: [],
  prevalenceFilterRange: undefined,
  prevalenceFilterSelected: undefined,
  prevalenceFilterGroup: "All",
  ageFilterRange: undefined,
  ageFilterSelected: undefined,
  seriousFilter: seriousFilterOptions,
  severityFilter: severityFilterOptions,
  relationshipFilter: relationshipFilterOptions,
  outcomeFilter: outcomeFilterOptions,
  expandedCategories: [],
  detailSearchTerm: "",
  detailSortColumn: [],
  detailResultsPerPage: 10
};
