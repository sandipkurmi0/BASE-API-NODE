import mongoose from 'mongoose';
require('dotenv').config();

class Connection {
  constructor() {
    const url = process.env.MONGODB_URI || ``;
    console.log('Establish new connection with url', url);
    mongoose.Promise = global.Promise;
    // mongoose.set("useNewUrlParser", true);
    // mongoose.set("useFindAndModify", false);
    // mongoose.set("useCreateIndex", true);
    // mongoose.set("useUnifiedTopology", true);
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useUnifiedTopology', true);
    mongoose.connect(url);
  }
}

export default new Connection();
