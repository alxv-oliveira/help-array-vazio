const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.105:27017/noderest', { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

module.exports = mongoose;