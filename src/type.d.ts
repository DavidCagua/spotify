interface Result {
  id: number;
  name: string;
  images: {
    url;
  }[];
}

type ResultState = {
  results: Result[];
  searchKeyword: string;
};

type SearchAction = {
  type: string;
  payload: Result[] | string;
};

type DispatchType = (args: SearchAction) => SearchAction;
