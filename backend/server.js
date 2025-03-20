// const express = require("express")
// const mongoose = require("mongoose")
// const connectedToMongodb = require("./db/db")
// const productRouter = require("./router/productRoutes")
// const CustomerRouter = require("./router/CustomerRoute")
// const cors = require("cors")
// const port = 4002;
// const app = express()
// app.use(express.json())
// app.use(cors())


// app.use(productRouter)
// app.use(CustomerRouter)
// app.use("/allimages" , express.static("document"))
// app.listen(port, () => {
//         connectedToMongodb
//         console.log(`server is running port number ${port}`)
// })

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const connectedToMongodb = require("./db/db");
const productRouter = require("./router/productRoutes");
const customerRouter = require("./router/CustomerRoute");

const app = express();
const PORT = 4002;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use(productRouter);
app.use(customerRouter);
app.use("/allimages", express.static("document"));

// Start Server
app.listen(PORT, async () => {
    try {
        await connectedToMongodb;
        console.log(`✅ Server is running on port ${PORT}`);
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
    }
});
