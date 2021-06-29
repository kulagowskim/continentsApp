import { ICountry } from "./ICountry";

export interface IState {
  code: string;
  name: string;
  country: ICountry;
}