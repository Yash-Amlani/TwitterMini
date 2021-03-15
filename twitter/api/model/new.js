const mongoose = require('mongoose');

const newSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username : String,
	tweet : String,
	likes : Number
});

module.exports = mongoose.model('New',newSchema);