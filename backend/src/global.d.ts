declare global {
  interface Country {
    countryCode: string;
    name: string;
  }

  interface PopulationCount {
    year: number;
    value: number;
  }

  interface CountryPopulationData {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
  }

  interface HistoricalPopulation {
    error: boolean;
    msg: string;
    data: CountryPopulationData[];
  }

  interface Flag {
    name: string;
    flag: string;
    iso2: string;
    iso3: string;
  }

  interface FlagsResponse {
    error: boolean;
    msg: string;
    data: Flag[];
  }
}

export {};
