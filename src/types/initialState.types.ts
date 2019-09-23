import * as t from ".";

export interface AppState {
  colors: string[];
  datasOriginal: any[];
  summarizedBy: t.SummarizedBy;
  groupVariable: t.GroupVariable;
  searchTerm: string;
  sortColumns: t.SortColumn[];
  prevalenceFilterRange?: [number, number];
  prevalenceFilterSelected?: [number, number];
  prevalenceFilterGroup: string;
  ageFilterRange?: [number, number];
  ageFilterSelected?: [number, number];
  seriousFilter: t.SeriousFilter[];
  severityFilter: t.SeverityFilter[];
  relationshipFilter: t.RelationshipFilter[];
  outcomeFilter: t.OutcomeFilter[];
  expandedCategories: string[];
  detailSearchTerm: string;
  detailSortColumn: t.SortColumn[];
  detailResultsPerPage: number;
  storeNames: string[];
}
