interface Result {
  date: any;
  id: number;
  name: string;
  image: string;
  images: {
    url;
  }[];
  preview_url: string;
  date: string;
}

type ResultState = {
  albums: Result[];
  songs: Result[];
  artists: Result[];
  history: Result[];
  searchKeyword?: string;
  filter: "bestMatch" | "artist" | "album" | "song" | "history";
};

type SearchAction = {
  type: "SET_NEW_RELEASES" | "SEARCH" | "FILTER" | "HISTORY";
  payloadAlbums?;
  payloadSongs?;
  payloadArtists?: Result[];
  payloadKeyword?: ResultState.searchKeyword;
  payloadFilter?: ResultState.filter;
  payloadHistory?: ResultState.history;
};

type DispatchType = (args: SearchAction) => SearchAction;
interface ProcessEnv {
  [key: string]: string | undefined;
}
