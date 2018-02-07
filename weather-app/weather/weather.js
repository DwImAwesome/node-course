const request = require('request');

var getWeather = (latititude, longtitude, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/8074b6aef4643743bba1ec113b6a59ff/${latititude},${longtitude}`,
    json: true
  }, (error,response,body) => {
    if (!error && response.statusCode === 200){
        callback(undefined,{
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    } else{
      callback('Error fetching data');
    }
  });

};


module.exports = {
  getWeather
};
