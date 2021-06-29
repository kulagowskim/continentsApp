import { IContinent } from "./IContinent";
import { ILanguage } from "./ILanguage";
import { IState } from "./IState";

export interface ICountry {
  code: string;
  name: string;
  native: string;
  phone: string;
  continent: IContinent;
  capital: string;
  currency: string;
  languages: ILanguage[];
  emoji: string;
  emojiU: string;
  states: IState[];
}

export interface ICountriesData {
  countries: ICountry[];
}