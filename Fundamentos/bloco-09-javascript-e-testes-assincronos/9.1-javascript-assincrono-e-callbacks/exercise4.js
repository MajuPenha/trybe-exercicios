const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = (temp) => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(callback) {
  const temp = callback();
  setTimeout(() => console.log(`Mars temperature is: ${temp} degree Celcius`), messageDelay())
}

sendMarsTemperature(getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo