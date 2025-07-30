const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchCountryByName(name) {
  const response = await fetch(`${BASE_URL}/name/${name}`);
  const data = await response.json();
  return data[0];
}

export async function allContryByName() {
  const response = await fetch(`${BASE_URL}/all?fields=name,capital,flags`);
  const data = await response.json();
  return data;
}

export async function UnsplashPhotoApi(countryName) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${countryName}&client_id=${
      import.meta.env.VITE_UNSPLASH_KEY
    }`
  );
  const data = await response.json();
  return data.results;
}

export async function fetchTimeByTimezone(timezone) {
  const url = `https://worldtimeapi.org/api/timezone/${timezone}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch time");
  const data = await response.json();
  return data;
}
