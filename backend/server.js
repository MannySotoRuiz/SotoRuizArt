require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const artRoutes = require("./routes/arts");

const PORT = process.env.PORT || 4000;
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
};

// express app
const app = express();

// middleware (its just logging the requests as they come in)
app.use(express.json());

app.use(cors(corsOptions));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//routes
app.get("/", (req, res) => {
    res.send("APP IS RUNNING");
})

app.use("/api/arts", artRoutes);

// connect to db
mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("conencted to db & listening on port", PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:`)))
//   .catch((error) => console.log(`${error} did not connect`));