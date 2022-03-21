import { atom } from "jotai";
import { Country } from "./types";

export const currentCountryAtom = atom<Country | null>(null);
