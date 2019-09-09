import * as o from "../utils/options";
import * as t from "../utils/types";
import datas from "../data.json";

export const initialState: t.AppState = {
  datas: datas,
  colors: ["green", "red", "blue", "orange"],
  groupVariable: "ARM",
  summarizedBy: "Participants",
  prevalenceRange: [0, 100],
  ageRange: [0, 100],
  serious: o.seriousOptions,
  severity: o.severityOptions,
  relationship: o.relationshipOptions,
  outcome: o.outcomeOptions
};
