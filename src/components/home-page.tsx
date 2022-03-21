import { useAtom } from "jotai";
import { currentCountryAtom } from "../atoms";

export const HomePage = () => {
  const [currentCountry] = useAtom(currentCountryAtom);
  return <div>home - {currentCountry?.code}</div>;
};
