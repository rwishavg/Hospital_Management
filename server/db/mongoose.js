var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://rwishav:itsrick0312@cluster0.b3l6t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

module.exports = {mongoose};
