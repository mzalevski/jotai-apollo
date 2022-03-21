import { gql, useQuery } from "@apollo/client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { currentCountryAtom } from "./atoms";

export const useGetCurrentCountry = () => {
  const [, setCurrentCountry] = useAtom(currentCountryAtom);

  const { data, error } = useQuery(gql`
    query {
      country(code: "PL") {
        code
        name
      }
    }
  `);

  useEffect(() => {
    if (!data?.country) return;

    setCurrentCountry(data.country);
  }, [data]);

  if (error) {
    console.error("error fetching current user: ", error);
  }
};
