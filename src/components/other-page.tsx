import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currentCountryAtom } from "../atoms";

export const OtherPage = () => {
  const [currentCountry] = useAtom(currentCountryAtom);

  return (
    <div>
      other - {currentCountry?.code}
      <br />
      <br />
      <Link to={"/"}>home</Link>
    </div>
  );
};
