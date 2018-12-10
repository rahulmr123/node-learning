const request = require('request');


const getAddress = (address, callback) => {
  let encodedCoordinated = encodeURIComponent(address);
  try {
    request({
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=5wojfYdyGWdyYbnQmpGw0NlzgamxZaCZ&location=${encodedCoordinated}`,
      json: true
    }, (error, response, body)=> {
      if(error) 
      callback('connection error')
      else if(body.info.statuscode === 0)
      callback(body.results[0].locations[0].latLng)    
    })
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
  getAddress
}