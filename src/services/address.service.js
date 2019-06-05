export const addressService = {
	fetchAddress
};

function fetchAddress() {
	return fetch('http://localhost:5000/api/addresses')
		.then(res => res.json())
		.then(addresses => addresses);
}

