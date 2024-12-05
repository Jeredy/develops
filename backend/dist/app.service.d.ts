export declare class AppService {
    getAvailableCountries(): Promise<Country[] | Error>;
    getSingleCountry({ countryCode, }: {
        countryCode: string;
    }): Promise<Country | Error>;
    getHistoricalPopulation(): Promise<CountryPopulationData[] | Error>;
    getCountryFlags(): Promise<Flag[] | Error>;
}
