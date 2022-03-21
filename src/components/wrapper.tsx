import { PropsWithChildren } from "react";
import { useGetCurrentCountry } from "../hooks";

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  useGetCurrentCountry();
  return <div>{children}</div>;
};
