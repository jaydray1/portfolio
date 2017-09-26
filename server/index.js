const express = require("express")
    , bodyParser = require("body-parser")
    , cors = require("cors")
    , app = module.exports = express()
    , port = 3000


app.use(bodyParser.json());
app.use(cors());


//connection to the front end
app.use(express.static(__dirname + "./../public"));






app.listen(port, () => {console.log(`I'm listening...${port}`)})