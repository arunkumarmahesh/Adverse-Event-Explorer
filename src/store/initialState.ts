import { AppState } from "../types";
import {
  seriousOptions,
  severityOptions,
  relationshipOptions,
  outcomeOptions
} from "../pages/components/checkfilter/checkFilterOptions";
import datas from "../data.json";

export const initialState: AppState = {
  datasOriginal: datas,
  datasSummarized: undefined,
  datasSearched: undefined,
  datasFiltered: undefined,
  headerValues: [],
  footerValues: [],
  colors: ["green", "red", "blue", "orange"],
  groupVariable: "ARM",
  summarizedBy: "Events",
  prevalenceRangeAll: [0, 100],
  prevalenceRangeSelected: [0, 100],
  ageRangeAll: [0, 100],
  ageRangeSelected: [0, 100],
  serious: seriousOptions,
  severity: severityOptions,
  relationship: relationshipOptions,
  outcome: outcomeOptions,
  detailDatas: {},
  detailSearch: undefined,
  detailSort: [],
  detailPages: 10,
  expandedCategories: []
};
