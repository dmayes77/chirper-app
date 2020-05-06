import { combineReducers } from 'redux';
import authedUser from './authedUser';
import chirps from './chirps';
import users from './users';

export default combineReducers({
	authedUser,
	users,
	chirps,
});
