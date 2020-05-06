export const RECEIVE_USERS = 'RECIEVE_USERS';

export const receiveUsers = users => {
	return {
		type: RECEIVE_USERS,
		users,
	};
};
