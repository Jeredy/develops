import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/countries')
  getAvailableCountries(): Promise<Country[] | Error> {
    return this.appService.getAvailableCountries();
  }

  @Get('/country/:countryCode')
  getSingleCountry(
    @Param('countryCode') countryCode: string,
  ): Promise<Country | Error> {
    return this.appService.getSingleCountry({ countryCode });
  }

  @Get('/countries/historicalPopulation')
  getHistoricalPopulation(): Promise<CountryPopulationData[] | Error> {
    return this.appService.getHistoricalPopulation();
  }

  @Get('/countries/flag')
  getCountryFlags(): Promise<Flag[] | Error> {
    return this.appService.getCountryFlags();
  }
}
