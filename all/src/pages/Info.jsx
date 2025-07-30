import { useEffect, useState } from "react";
import {
  fetchCountryByName,
  UnsplashPhotoApi,
} from "../services/countryApi.js";

import { useParams } from "react-router-dom";

function Clock({ timezone }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    function timezoneToIANA(tz) {
      const match = tz.match(/UTC([+-])(\d{2}):(\d{2})/);
      if (!match) return "UTC";
      const sign = match[1] === "+" ? "-" : "+";
      const hours = parseInt(match[2], 10);
      const minutes = parseInt(match[3], 10);
      if (minutes !== 0) return "UTC";
      return `Etc/GMT${sign}${hours}`;
    }

    function updateTime() {
      try {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: timezoneToIANA(timezone),
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTime(formatter.format(new Date()));
      } catch {
        setTime("Invalid timezone");
      }
    }

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg p-6 w-48 h-28 select-none">
      <div className="text-sm uppercase tracking-widest mb-1">Local Time</div>
      <div className="text-3xl font-mono font-bold">{time}</div>
      <div className="text-xs mt-1 opacity-80">{timezone}</div>
    </div>
  );
}

function Info() {
  const { country: countryNameParam } = useParams();
  const [country, setCountry] = useState(null);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    async function loadCountry() {
      const result = await fetchCountryByName(countryNameParam);
      setCountry(result);
    }
    async function loadPhoto() {
      const result = await UnsplashPhotoApi(countryNameParam);
      setPhoto(result);
    }
    loadCountry();
    loadPhoto();
  }, []);

  const lat = country?.latlng?.[0] ?? 0;
  const lng = country?.latlng?.[1] ?? 0;

  return (
    <div className="w-screen h-screen bg-neutral-300 overflow-auto">
      {country && photo.length > 0 ? (
        <>
          <div className="relative w-full h-[400px] overflow-hidden">
            <img
              src={photo[0].urls.raw}
              alt={photo[0].alt_description}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
              <h1 className="text-4xl font-bold">{country.name.common}</h1>
              <h2 className="text-xl">{country.name.official}</h2>
            </div>
          </div>

          <p className="flex flex-col text-sm mt-2 items-center">
            📸 Image by {photo[0].user.name}
          </p>

          <div className="flex mt-6" style={{ height: "400px" }}>
            <div className="flex flex-col items-center justify-center w-1/2">
              <img className="w-[400px]" src={country.flags.png} alt="Flag" />
              <p className="text-lg mt-2">🌍 Region: {country.region}</p>
            </div>
            <div className="w-1/2">
              <iframe
                title="Map"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                  lng - 1
                }%2C${lat - 1}%2C${lng + 1}%2C${
                  lat + 1
                }&layer=mapnik&marker=${lat}%2C${lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <section className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 flex justify-between items-start gap-6 flex-wrap">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Basic Information
              </h2>
              <ul className="space-y-3 text-gray-700 text-base">
                <li>
                  <span className="font-semibold">Population: </span>
                  {country.population.toLocaleString("en-US")}
                </li>
                <li>
                  <span className="font-semibold">Independent: </span>
                  {country.independent ? "Yes" : "No"}
                </li>
                <li>
                  <span className="font-semibold">Area: </span>
                  {country.area.toLocaleString("en-US")} km²
                </li>
                <li>
                  <span className="font-semibold">Languages: </span>
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A"}
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {country.timezones.map((tz, index) => (
                <Clock key={index} timezone={tz} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <p className="text-center mt-10 text-lg">Loading...</p>
      )}
    </div>
  );
}

export default Info;
