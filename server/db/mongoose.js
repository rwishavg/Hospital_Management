var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://rwishav:itsrick0312@cluster0.b3l6t.mongodb.net/PatientManagmentSystem?retryWrites=true&w=majority");
module.exports = {mongoose};
