const api = require('../services/taxi')

exports.getDrivers = async (req, res) => {
  api.getDrivers().then(drivers => {
    res.status(200).send(drivers.data)
  }).catch(e => {
    res.status(500).send({ error: e.message })
  })
}

exports.getOrders = async (req, res) => {
  if (req.query.finished) {
    api.getFinishedOrders(req.query).then(orders => {
      res.status(200).send(orders.data)
    }).catch(e => {
      res.status(500).send({ error: e.message })
    })
  } else {
    api.getCurrentOrders().then(orders => {
      res.status(200).send(orders.data)
    }).catch(e => {
      res.status(500).send({ error: e.message })
    })
  }
}

exports.getCrewList = async (req, res) => {
  api.getCrewList().then(crews => {
    res.status(200).send(crews.data)
  }).catch(e => {
    res.status(500).send({ error: e.message })
  })
}

exports.getCrew = async (req, res) => {
  api.getCrew({ crew_id: req.params.id }).then(crew => {
    res.status(200).send(crew.data)
  }).catch(e => {
    res.status(500).send({ error: e.message })
  })
}
