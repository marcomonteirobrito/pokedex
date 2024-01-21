type TypeProps = {
  type: {
    name: string;
  };
};

type SpritesProps = {
  other: {
    "official-artwork": {
      front_default: string;
    };
  };
};
export type ResultProps = {
  name: string;
  url: string;
  id?: number;
  types?: TypeProps[];
  sprites?: SpritesProps;
};

export type ResponseProps = {
  count: number;
  next: string;
  previous: string;
  results: ResultProps[];
};
