export interface DetailFilmSerie {
  id: number;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: {
    time: string;
    days: string[];
  };
  rating: {
    average: number;
  };
  weight: number;
  network: {
    id: number;
    name: string;
    country: {
      name: string;
      code: string;
      timezone: string;
    };
  } | null;
  webChannel: null; // non presente, ma definito come null
  dvdCountry: null;
  externals: {
    imdb: string;
    thetvdb: number;
    tvrage: number;
  };
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: number;
  url: string;
  _links: {
    self: {
      href: string;
    };
    previousepisode?: {
      href: string;
      name?: string;
    };
  };
}