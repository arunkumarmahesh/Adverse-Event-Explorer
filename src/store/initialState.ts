import * as o from "../utils/options";
import * as t from "../types";
import datas from "../data.json";

export const initialState: t.AppState = {
  datasOriginal: datas,
  datasSummarized: undefined,
  datasSearched: undefined,
  datasFiltered: undefined,
  headerValues: {
    groups: {},
    total: 0
  },
  footerValues: {
    groups: {},
    total: 0
  },
  colors: ["green", "red", "blue", "orange"],
  groupVariable: "ARM",
  summarizedBy: "Participants",
  prevalenceRangeAll: [0, 100],
  prevalenceRangeSelected: [0, 100],
  ageRangeAll: [0, 100],
  ageRangeSelected: [0, 100],
  serious: o.seriousOptions,
  severity: o.severityOptions,
  relationship: o.relationshipOptions,
  outcome: o.outcomeOptions
};
