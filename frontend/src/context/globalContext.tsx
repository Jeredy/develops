"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type GlobalContextProps = {
  children?: React.ReactNode;
  country: Country | undefined;
  setCountry: Dispatch<SetStateAction<Country | undefined>>;
  countryHistorical: CountryHistorical[] | undefined;
  setCountryHistorical: Dispatch<
    SetStateAction<CountryHistorical[] | undefined>
  >;
  flags: Flag[] | undefined;
  setFlags: Dispatch<SetStateAction<Flag[] | undefined>>;
};

const GlobalContext = createContext<GlobalContextProps>({
  countryHistorical: undefined,
  setCountryHistorical: () => {},
  country: undefined,
  setCountry: () => {},
  flags: undefined,
  setFlags: () => {},
});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [country, setCountry] = useState<Country | undefined>(undefined);
  const [flags, setFlags] = useState<Flag[] | undefined>(undefined);
  const [countryHistorical, setCountryHistorical] = useState<
    CountryHistorical[] | undefined
  >(undefined);

  return (
    <GlobalContext.Provider
      value={{
        country,
        setCountry,
        flags,
        setFlags,
        countryHistorical,
        setCountryHistorical,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useBottomSheet = () => useContext(GlobalContext);

export default GlobalContext;
