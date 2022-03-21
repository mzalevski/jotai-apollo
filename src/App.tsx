import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { HomePage } from "./components/home-page";
import { OtherPage } from "./components/other-page";
import { Suspense } from "react";
import { useAtom } from "jotai";
import { clientAtom } from "./atoms";

export const App = () => {
  const [client] = useAtom(clientAtom);

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Suspense fallback="loading...">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="other" element={<OtherPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};
