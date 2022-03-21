import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { currentCountryAtom } from "../atoms";

export const HomePage = () => {
  const [currentCountry] = useAtom(currentCountryAtom);

  return (
    <div>
      home - {currentCountry?.code}
      <br />
      <br />
      <Link to={"/other"}>other</Link>
    </div>
  );
};
