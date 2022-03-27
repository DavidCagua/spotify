interface Result {
  id: number;
  name: string;
  images: {
    url;
  }[];
}

type ResultState = {
  results: Result[];
};

type SearchAction = {
  type: string;
  payload: Result[];
};

type DispatchType = (args: SearchAction) => SearchAction;
