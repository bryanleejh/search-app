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
