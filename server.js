const express = require('express')
express()
  .use(express.static(__dirname))
  .listen(8000, () => console.log('http://localhost:8000'))