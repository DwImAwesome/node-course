const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;


geocode.geocodeAddress(argv.address, (errorMsg, results) =>{
  if (errorMsg) {
    console.log(errorMsg);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longtitude,(errorMsg,weatherResults)=>{
      if(errorMsg){
        console.log(errorMsg);
      } else {
        console.log(`it's currently ${weatherResults.temperature}`);
        console.log(`it feels like ${weatherResults.apparentTemperature}`);
      }
    });
  }
});

//
// latititude, lng, callback
