const express = require("express")
const vehicleRouter = require("./src/vehicleRouter")
const sellerRouter = require("./src/sellerRouter")

const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json());


app.use("/vehicles", vehicleRouter)

app.use("/sellers", sellerRouter)

app.listen(3030, () => console.log("Server ruinning!"))

// (async() => {
//     const database = require('./src/database/database');
//     const Vehicle = require('./src/entities/Vehicle')
//     const Seller = require('./src/entities/Seller')

//     try {
//         const resultado = await database.sync();
//         console.log(resultado);
//     } catch (error) {
//         console.log(error);
//     }
// })();