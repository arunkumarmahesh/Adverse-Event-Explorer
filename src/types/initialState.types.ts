import * as t from ".";

export interface AppState {
  datasOriginal: any[];
  datasSummarized?: t.GroupedDatas[];
  datasSearched?: t.GroupedDatas[];
  datasFiltered?: t.GroupedDatas[];
  headerValues: t.GroupedValue[];
  footerValues: t.GroupedValue[];
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
  detailDatas: {
    [key: string]: {
      datas: t.Data[];
      size: number;
    };
  };
  detailSearch?: string;
  detailSort: t.DetailSortItem[];
  detailPages: number;
}
