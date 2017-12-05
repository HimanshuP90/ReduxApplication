import { INC_NUMBER, DEC_NUMBER } from '../actions';

export default function performAction(state = {num: 0}, action) {
	switch(action.type) {
		case INC_NUMBER: 
			console.log('Increment Action performed: ', state);
			let num = state.num + 1;
			return { num };
		case DEC_NUMBER:
			console.log('Decrement Action performed: ', state);
			num = state.num - 1;
			return { num };
		default:
			return state;
	}
}