export const addressService = {
	fetchAddress,
	addAddress,
	deleteAddress
};

function fetchAddress() {
	return fetch('http://localhost:5000/api/places')
		.then(res => res.json());
}

function addAddress(address) {
	const postOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(address)
	};

	return fetch('http://localhost:5000/api/places', postOptions)
		.then(res => res.json())
		.then(address => {
			return address;
		});
}

function deleteAddress(id) {
	const deleteOptions = {
		method: 'DELETE'
	};

	return fetch(`http://localhost:5000/api/places/${id}`, deleteOptions)
		.then(res => res.json());
}
