import { DATA_AVAILABLE } from "../actions/home"

let dataState = { data: [], loading:false };
 
export default (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = {...state, data: action.data, loading:false };
            break;
    }
    return state;
};
