const mongoose = require("mongoose");

// MongoDB connection URL
const mongoUrl = "mongodb+srv://hj037441:8913114@cluster0.g067e.mongodb.net/EasyStays?retryWrites=true&w=majority";


// Establish connection
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connection Successful"))
.catch((error) => console.log("MongoDB Connection Failed:", error));

// Export mongoose instance
module.exports = mongoose;
