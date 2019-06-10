const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
	formatted_address: String,
	lat: Number,
	lng: Number,
	place_id: String
});

placeSchema.virtual('id').get(function() {
	return this._id.toHexString();
});

placeSchema.set('toJSON', {
	virtuals: true
});

// create the model for user and expose it to our app
module.exports = mongoose.model('Place', placeSchema);