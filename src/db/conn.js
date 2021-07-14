const mongoose  = require('mongoose')

mongoose.connect( "mongodb+srv://rak9621:ramram@loginform.9hc6j.mongodb.net/Employee?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then((res) => {
    console.log("database in now connected ")

}).catch((err) => {
    
   console.log("database not connected" ,err)

});