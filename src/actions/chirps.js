export const RECEIVE_CHIRPS = 'RECIEVE_CHIRPS';

export const receiveChirps = chirps => {
	return {
		type: RECEIVE_CHIRPS,
		chirps,
	};
};
