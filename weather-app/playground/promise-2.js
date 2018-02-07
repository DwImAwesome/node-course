// load request
const request = require('request');
// copye geocode adrees all.


var geocodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
      var encodedAddress = encodeURIComponent(address);
        request({
          url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
          json: true
        }, (error, response, body)=>{
          if (error){
            reject('Unable to connect to Google servers');
          }else if ( body.status === 'ZERO_RESULTS') {
            reject('Uanble to do somemthing');
          } else if (body.status === 'OK') {
            resolve({
              address: body.results[0].formatted_address,
              latitude: body.results[0].geometry.location.lat,
              longtitude: body.results[0].geometry.location.lng
            });
          }
        });
    })
};


geocodeAddress('19146').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
},(errorMsg)=>{
  console.log(errorMsg)
});
