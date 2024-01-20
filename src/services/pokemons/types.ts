export type ResultProps = {
  name: string;
  url: string;
};

export type ResponseProps = {
  count: number;
  next: string;
  previous: string;
  results: ResultProps[];
};
