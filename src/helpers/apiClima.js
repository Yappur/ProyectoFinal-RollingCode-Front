export const ApiClima = async () => {
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=-26.82414&lon=-65.2226&exclude=hourly&appid=ad3198bc0dec7143d227b9ba4d377894`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
};
