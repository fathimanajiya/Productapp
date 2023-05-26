const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fathimanajiya:najiya212@cluster0.xqo8uvw.mongodb.net/')
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log(err);
})
