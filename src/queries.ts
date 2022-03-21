import { gql } from "@apollo/client";

export const COUNTRY = gql`
  query {
    country(code: "PL") {
      code
      name
    }
  }
`;
