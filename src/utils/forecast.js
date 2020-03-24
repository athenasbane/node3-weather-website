const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/b6efeb00ceb5b45b61d6b6ad4d6350f3/' + latitude + ',' + longitude + '?units=uk2' 

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('bad coordinates given')
        
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain. The temperature will be between ' + body.daily.data[0].temperatureLow + ' - ' + body.daily.data[0].temperatureHigh + ' degrees')
        }
    })
}

module.exports = forecast