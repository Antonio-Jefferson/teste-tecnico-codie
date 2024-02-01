import { FieldValues } from "react-hook-form";

export interface Region {
    name: string;
    url: string;
  }

export interface City {
    name: string;
    url: string;
  }
  
export interface Pokemon {
    name: string;
    url: string;
  }

export interface FormData extends FieldValues {
    firstName: string;
    lastName: string;
    region: string;
    city: string;
    pokemons: string[];
    appointmentDate: string;
    appointmentTime: string;
 }

 export interface Hour{
  hour: string
}