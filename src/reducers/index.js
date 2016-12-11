import {OPEN, CLOSE} from '../actions'

const initialState = {
	isOpen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN:
    	// console.log('open!')
      return  {
      	isOpen: true
      }
    case CLOSE:
    	// console.log('close!')
    	return {
      	isOpen: false
      }
    default:
      return state
  }
};
