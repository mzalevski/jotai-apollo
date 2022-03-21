import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { HomePage } from "./components/home-page";
import { OtherPage } from "./components/other-page";
import { Wrapper } from "./components/wrapper";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="other" element={<OtherPage />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  </ApolloProvider>
);
