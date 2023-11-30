const express = require('express');
const router = express.Router();
const redis = require('../redis')

router.get('/', async (_, res) => {
  const response = await redis.getAsync('added_todos')
  if(response){
    res.send(JSON.parse(response))
  }
  else res.send({ "added_todos": 0 })
});

module.exports = router;
