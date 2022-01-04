
const cors = require('cors')
const express = require("express");
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    return res.json([
        { name: 'wagner'}, 
        {name: 'lobo'}
    ])

})

app.listen('4567')