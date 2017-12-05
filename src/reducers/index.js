import { INC_NUMBER } from '../actions';

export default function performAction(state, action) {
	switch(action.type) {
		case INC_NUMBER: 
			console.log('Action performed');
			console.log(state, action);
			let num =0;
			return { num };
		default:
			num =0;
			return num;
	}
}