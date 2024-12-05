"use client";
import api from "@/services/api";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import GlobalContext from "@/context/globalContext";
import { baseUrl } from "@/services/constants";

const CountriesPage: React.FC = () => {
  const { setCountry, setFlags, setCountryHistorical, flags } =
    useContext(GlobalContext);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("./no-image.png");

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const { data = [] } = await api.get(`${baseUrl}/countries/flag`);

        setFlags(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchCountries = async () => {
      try {
        const { data = [] } = await api.get(`${baseUrl}/countries`);

        const formattedCountries = data.map((country: Country) => ({
          name: country.name,
          countryCode: country.countryCode,
        }));

        setCountries(formattedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    const fetchhistoricalPopulation = async () => {
      try {
        const { data = [] } = await api.get(
          `${baseUrl}/countries/historicalPopulation`
        );

        setCountryHistorical(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlags();
    fetchCountries();
    fetchhistoricalPopulation();
  }, []);

  const diplayCountries = () => {
    if (!countries.length) {
      return (
        <h1 className="text-1xl font-bold text-center mt-10">
          No countries of found
        </h1>
      );
    }

    return (
      <>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country: Country) => (
            <li
              key={country.countryCode}
              className="border rounded-lg p-4 relative shadow hover:shadow-md transition flex flex-row items-center"
            >
              <div className="w-1/3 flex justify-center">
                <img
                  src={handleImage(country)}
                  alt="Image description"
                  className="w-16 h-16 object-center rounded-full bg-gray-50"
                />
              </div>

              <div className="p-4 w-2/3">
                <h3 className="text-xl font-semibold">{country.name}</h3>
                <p className="text-gray-700">{country.countryCode}</p>
              </div>

              <Link
                href={`/country`}
                className="absolute inset-0"
                onClick={() => {
                  setCountry(country);
                }}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  const handleImage = (country: Country) => {
    const flatData = flags?.find(
      (flag: Flag) => flag.iso2 === country?.countryCode
    );
    if (!!flatData?.flag?.length) {
      return flatData?.flag;
    } else {
      return "./no-image.png";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Loading countries...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">List of Countries</h1>
      {diplayCountries()}
    </div>
  );
};

export default CountriesPage;
