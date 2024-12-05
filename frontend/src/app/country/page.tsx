"use client";

import PopulationChart from "@/components/populationChart";
import GlobalContext from "@/context/globalContext";
import api from "@/services/api";
import { baseUrl } from "@/services/constants";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const CountryDetails = () => {
  const { country, setCountry, flags, countryHistorical } =
    useContext(GlobalContext);
  const [countryDetails, setCountryDetails] = useState<CountryDetails>();
  const [populationData, setPopulationData] = useState<PopulationCount[]>();
  const [image, setImage] = useState("./no-image.png");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchcountry = async () => {
      try {
        const { data = [] } = await api.get(
          `${baseUrl}/country/${country?.countryCode}`
        );

        const flatData = flags?.find(
          (flag: Flag) => flag.iso2 === country?.countryCode
        );
        !!flatData?.flag?.length && setImage(flatData?.flag);

        const countryIso3 = flatData?.iso3;
        setPopulationData(
          countryHistorical?.find(
            (data: CountryHistorical) => data.code == countryIso3
          )?.populationCounts
        );

        setCountryDetails(data);
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchcountry();
  }, [country]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Loading country...</p>
      </div>
    );
  }

  const handleClick = (item: Border) => {
    setCountry({
      name: item.officialName,
      countryCode: item.countryCode,
    });
  };

  const diplayCountries = () => {
    if (!countryDetails?.borders) return <></>;

    return (
      <>
        <h1 className="text-2xl font-bold text-center mb-6 mt-10">
          List of country that border the country
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countryDetails?.borders?.map((item) => (
            <li
              key={item.countryCode}
              className="border rounded-lg p-4 shadow hover:shadow-md transition relative"
            >
              <h3 className="text-xl font-semibold">{item.officialName}</h3>
              <p className="text-gray-700">{item.countryCode}</p>
              <p className="text-gray-700">{item.region}</p>

              <Link
                href={`/country`}
                className="absolute inset-0"
                onClick={() => handleClick(item)}
              />
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="p-4 flex flex-row items-center">
        <div className=" flex justify-center">
          <img
            src={image}
            alt="Image description"
            className="w-16 h-16 object-center rounded-full bg-gray-50"
          />
        </div>

        <div className="p-4 w-2/3">
          <h3 className="text-xl font-semibold">{country?.name}</h3>
          <p className="text-gray-700">{country?.countryCode}</p>
        </div>
      </div>

      <PopulationChart populationCounts={populationData} />

      {diplayCountries()}
    </div>
  );
};

export default CountryDetails;
