const express = require("express");//to build backend quickly we use express 
const app = express();
const cors = require("cors");
const PORT = 8745
require("./dB")
app.use(cors());
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})