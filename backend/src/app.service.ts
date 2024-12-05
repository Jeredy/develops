import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { BASE_URL_COUNTRIES_NOW, BASE_URL_NAGER } from './constants/api';

@Injectable()
export class AppService {
  async getAvailableCountries(): Promise<Country[] | Error> {
    const baseUrl = `${BASE_URL_NAGER}/api/v3/AvailableCountries`;

    try {
      const response = await axios.get<Country[]>(baseUrl);

      return response.data;
    } catch (error) {
      return new Error('Failed to get availabel countries');
    }
  }

  async getSingleCountry({
    countryCode,
  }: {
    countryCode: string;
  }): Promise<Country | Error> {
    const baseUrl = `${BASE_URL_NAGER}/api/v3/CountryInfo/${countryCode}`;

    try {
      const response = await axios.get<Country>(baseUrl);

      return response.data;
    } catch (error) {
      return new NotFoundException('No country was found');
    }
  }

  async getHistoricalPopulation(): Promise<CountryPopulationData[] | Error> {
    const baseUrl = `${BASE_URL_COUNTRIES_NOW}/api/v0.1/countries/population`;

    try {
      const response = await axios.get<HistoricalPopulation>(baseUrl);

      return response.data.data;
    } catch (error) {
      return new NotFoundException('Resource not  found');
    }
  }

  async getCountryFlags(): Promise<Flag[] | Error> {
    const baseUrl = `${BASE_URL_COUNTRIES_NOW}/api/v0.1/countries/flag/images`;

    try {
      const response = await axios.get<FlagsResponse>(baseUrl);

      return response.data.data;
    } catch (error) {
      return new NotFoundException('Resource not found');
    }
  }
}
