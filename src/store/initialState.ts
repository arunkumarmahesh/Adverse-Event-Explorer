import { AppState } from "../types";
import {
  seriousOptions,
  severityOptions,
  relationshipOptions,
  outcomeOptions
} from "../pages/components/checkfilter/checkFilterOptions";
import datas from "../data.json";

export const initialState: AppState = {
  colors: ["green", "red", "blue", "orange"],
  datasOriginal: datas,
  groupVariable: "ARM",
  summarizedBy: "Events",
  searchTerm: "",
  prevalenceFilterRange: [0, 0],
  prevalenceFilterSelected: [0, 0],
  ageFilterRange: [0, 0],
  ageFilterSelected: [0, 0],
  serious: seriousOptions,
  severity: severityOptions,
  relationship: relationshipOptions,
  outcome: outcomeOptions,
  expandedCategories: [],
  detailSearchTerm: "",
  detailSortColumns: [],
  detailResultsPerPage: 10
};
