import { useAtom } from "jotai";
import { currentCountryAtom } from "../atoms";

export const OtherPage = () => {
  const [currentCountry] = useAtom(currentCountryAtom);
  return <div>other - {currentCountry?.code}</div>;
};
