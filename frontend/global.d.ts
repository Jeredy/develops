declare global {
  interface Country {
    countryCode: string;
    name: string;
    image?: string;
  }

  interface PopulationCount {
    year: number;
    value: number;
  }
  
  interface CountryHistorical {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
  }

  interface Flag {
    name: string;       
    flag: string;       
    iso2: string;       
    iso3: string;       
  }

  interface Border {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[] | null; 
  }
  
  interface CountryDetails {
    commonName: string;
    officialName: string;
    countryCode: string;
    region: string;
    borders: Border[] | null;
  }
  
}

export {}