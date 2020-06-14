const axios = require('axios')
const https = require('https')
const crypto = require('crypto')

const instance = axios.create({
  baseURL: 'https://178.176.195.133:8093/common_api/1.0',
  headers: {
    'content-type': 'application/json'
  },
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

const api = {
  ping () {
    return instance.get('/ping')
  },
  getCurrentOrders () {
    return instance.get('/get_current_orders', {
      headers: {
        'Signature': this.generateSignature()
      }
    })
  },
  getFinishedOrders (params) {
    return instance.get('/get_finished_orders', {
      params: params,
      headers: {
        'Signature': this.generateSignature(params)
      }
    })
  },

  getDrivers () {
    return instance.get('/get_drivers_info', {
      headers: {
        'Signature': this.generateSignature()
      }
    })
  },
  createDriver (params) {
    return instance.post('/create_driver', params, {
      headers: {
        'Signature': this.generateSignature(params)
      }
    })
  },

  getCrewList() {
    return instance.get('/get_crews_info',  {
      headers: {
        'Signature': this.generateSignature()
      }
    })
  },

  getCrew(params) {
    return instance.get('/get_crew_info',  {
      params: params,
      headers: {
        'Signature': this.generateSignature(params)
      }
    })
  },

  generateSignature (params) {
    const key = '12345'
    let data = ''
    for (let param in params) {
      if (params.hasOwnProperty(param)) {
        data += param + '=' + params[param] + '&'
      }
    }
    if (data.length) {
      data = data.slice(0, -1)
    }
    data += key
    console.log(data);
    return crypto.createHash('md5').update(data).digest('hex')
  }
}

module.exports = api
