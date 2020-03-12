require('dotenv').config()

const path = require('path')

// specify a folder for statis asses, like images, css, index.html, js...
// we need an endpoint on "/" to send index.html

const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')))

const PORT = process.env.PORT || 9000

console.log(process.env.LADY);

// endpoints that server JSON
app.get('/api', (req,res) => {
    res.json({ message: 'The api is UP' })
})

// fall back endpoint that will just send back index.html with the CRA
app.get("*", (req, res) => {
//    send back the index.html contained inside client/build
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})