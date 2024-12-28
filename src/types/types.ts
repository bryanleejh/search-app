export type Highlight = {
  BeginOffset: number;
  EndOffset: number;
};

export type DocumentText = {
  Text: string;
  Highlights: Highlight[];
};

export type SearchResult = {
  DocumentId: string;
  DocumentTitle: DocumentText;
  DocumentExcerpt: DocumentText;
  DocumentURI: string;
};

export type ApiResponse = {
  TotalNumberOfResults: number;
  Page: number;
  PageSize: number;
  ResultItems: SearchResult[];
};
