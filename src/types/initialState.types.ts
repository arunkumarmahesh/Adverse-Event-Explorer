import * as t from ".";

export interface AppState {
  colors: string[];
  datasOriginal: any[];
  summarizedBy: t.SummarizedBy;
  groupVariable: t.GroupVariable;
  searchTerm: string;
  prevalenceFilterRange: [number, number];
  prevalenceFilterSelected: [number, number];
  ageFilterRange: [number, number];
  ageFilterSelected: [number, number];
  serious: t.Serious[];
  severity: t.Severity[];
  relationship: t.Relationship[];
  outcome: t.Outcome[];
  expandedCategories: string[];
  detailSearchTerm: string;
  detailSortColumns: t.DetailSortItem[];
  detailResultsPerPage: number;
}
