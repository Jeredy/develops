import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAvailableCountries(): Promise<Country[] | Error>;
    getSingleCountry(countryCode: string): Promise<Country | Error>;
    getHistoricalPopulation(): Promise<CountryPopulationData[] | Error>;
    getCountryFlags(): Promise<Flag[] | Error>;
}
