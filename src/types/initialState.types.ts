import * as t from ".";

export interface AppState {
  datasOriginal: any[];
  datasSummarized?: t.GroupedDatas[];
  datasSearched?: t.GroupedDatas[];
  datasFiltered?: t.GroupedDatas[];
  headerValues: t.GroupedValues;
  footerValues: t.GroupedValues;
  colors: string[];
  groupVariable: t.GroupVariable;
  summarizedBy: t.SummarizedBy;
  prevalenceRangeAll: [number, number];
  prevalenceRangeSelected: [number, number];
  ageRangeAll: [number, number];
  ageRangeSelected: [number, number];
  serious: t.Serious[];
  severity: t.Severity[];
  relationship: t.Relationship[];
  outcome: t.Outcome[];
  detailDatas: any[];
  detailDatasCurrent: any[];
  detailSort: t.DetailSort | undefined;
}
