import { INC_NUMBER } from '../actions';

export default function performAction(state = {num: 0}, action) {
	switch(action.type) {
		case INC_NUMBER: 
			console.log('Action performed: ', state);
			let num = state.num + 1;
			return { num };
		default:
			return state;
	}
}