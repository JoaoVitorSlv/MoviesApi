import { Link } from "react-router-dom";
import { allContryByName } from "./services/countryApi";
import { useEffect, useState } from "react";

function App() {
  const [countrys, setCountrys] = useState([]);
  useEffect(() => {
    async function loadCountrys() {
      const result = await allContryByName();
      setCountrys(result);
    }
    loadCountrys();
  }, []);
  return (
    <div className="w-screen h-screen overflow-auto">
      <h1 className="text-5xl flex items-center justify-center">Countrys</h1>
      {countrys.length > 0 ? (
        <>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {countrys.map((country, index) => (
              <div
                key={index}
                className="bg-neutral-300 p-4 rounded shadow text-center"
              >
                <img
                  className="w-40 mx-auto"
                  src={country.flags.png}
                  alt={`Bandeira de ${country.name.common}`}
                />
                <Link to={`/info/${country.name.common}`}>
                  {country.name.common}
                </Link>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
