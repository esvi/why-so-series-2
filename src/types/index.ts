import { AxiosHeaders } from "axios";

interface Image {
  medium: string;
  original: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

interface Rating {
  average: number;
}

interface Schedule {
  time: string;
  days: Array<string>;
}

interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links?: any;
}

interface Actor {
  id: number;
  url: string;
  name: string;
  image: Image;
  gender: string;
  birthday: string;
  deathday: any;
  country: Country;
  updated: number;
  _links?: any;
}

interface CastMember {
  character: Character;
  person: Actor;
  self: boolean;
  voice: boolean;
}

interface Show {
  id: number;
  url: string;
  name: string;
  image: Image;
  summary: string;
  genres: Array<string>;
  officialSite: string;
  network: Network;
  language: string;
  premiered: string;
  ended: string;
  runtime: number;
  averageRuntime: number;
  status: string;
  rating: Rating;
  schedule: Schedule;
  type: string;
  webChannel: any;
  externals: any;
  dvdCountry: any;
  updated: number;
  _links?: any;
}

interface ShowExtra extends Show {
  cast: Array<CastMember>;
  weight: number;
  _embedded?: any;
}

interface SearchedShowData {
  score: number;
  show: Show;
}

// Response Data
interface ResponseData {
  config: any;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: number;
  statusText: string;
}

interface ShowsResponseData extends ResponseData {
  data: Array<Show>;
}

interface ShowResponseData extends ResponseData {
  data: Array<ShowExtra>;
}

interface SearchedShowsResponseData extends ResponseData {
  data: Array<SearchedShowData>;
}

// Episodes
export interface Episode {
  id: number;
  season: number;
  number: number;
  url: string;
  name: string;
  image: Image;
  summary: string;
  runtime: number;
  rating: Rating;
  airdate: string;
  airstamp: string;
  airtime: string;
  type: string;
  _links?: any;
}

// Get All Shows
export interface ShowsResponse {
  data: ShowsResponseData;
}

// Get Show By ID
export interface ShowResponse {
  data: ShowResponseData;
}

// Get Shows By Query
export interface SearchedShowsResponse {
  data: SearchedShowsResponseData;
}

// Alert Messages
export interface Message {
  name: string;
  description: string;
}