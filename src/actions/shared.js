import { getInitialData } from '../utils/api';
import { setAuthedUser } from './authedUser';
import { receiveChirps } from './chirps';
import { receiveUsers } from './users';

const AUTHED_ID = 'tylermcginnis';

const handleInitialData = () => dispatch =>
	getInitialData().then(({ users, tweets }) => {
		dispatch(receiveUsers(users));
		dispatch(receiveChirps(chirps));
		dispatch(setAuthedUser(AUTHED_ID));
	});

export { handleInitialData };
