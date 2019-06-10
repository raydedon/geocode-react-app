const Place = require('../model/place');

exports = module.exports = {};

exports.create = (req, res) => {
	// Create a User
	let {formatted_address, geometry: {location: {lat, lng}}, place_id} = req.body;
	const place = new Place({formatted_address, lat, lng, place_id});
	
	// Save User in the database
	Place.find({place_id}).exec(function(err, docs) {
		if(docs.length) {
			res.send(docs[0]);
		} else {
			place.save()
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.status(500).send({
						message: err.message || 'Some error occurred while creating the Place.'
					});
				});
		}
	});
};

// get place by id
exports.read = (req, res) => {
	Place.findById(req.params.id)
		.lean()
		.exec()
		.then(place => {
			res.send(place);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while retrieving Place.'});
		});
};

// get all places
exports.readAll = (req, res) => {
	Place.find({})
		.then(places => {
			res.send(places);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while retrieving Places.'});
		});
};

exports.update = (req, res) => {
	let {id = ''} = req.params;
	Place.findOneAndUpdate({_id: id}, {$set: {...req.body}}, {new: true, upsert: true})
		.then(places => {
			res.send(places);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while updating Places.'});
		});
};

exports.delete = (req, res) => {
	let {id = ''} = req.params;
	Place.findOneAndDelete({_id: id})
		.then(place => {
			res.send(place);
		})
		.catch(err => {
			res.status(500).send({message: err.message || 'Some error occurred while deleting Places.'});
		});
};

