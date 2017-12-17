
import { SET_FILTER} from '../actions/index';
  

const initialState = {
    filterText: '';
    people: []
}

function peopleSearchApp(state = initialState, action) {
    switch (action.type) {
        case SET_FILTER:
            return Object.assign({}, state, {
                
            })
    }
}