import { ApolloClient, InMemoryCache } from "@apollo/client";
import { atom } from "jotai";
import { COUNTRY } from "./queries";
import { Country } from "./types";

export const clientAtom = atom(
  new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache(),
  })
);

export const currentCountryAtom = atom<Promise<Country>>((get) => {
  return get(clientAtom)
    .query<{ country: Country }>({ query: COUNTRY })
    .then((result) => result.data.country);
});
