const express = require("express");
require("dotenv").config();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const fileRoute = require("./routes/fileRoute")
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended :false}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", fileRoute);
app.use("/", (req, res)=>{
    res.json("Home page")
})

app.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
});
