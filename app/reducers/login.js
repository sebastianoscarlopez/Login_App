import { TRY_AUTENTICATE, AUTENTICATE_END } from "../actions/login"

let initState = { loading:false, message: '' };

export default (state = initState, action) => {
    switch (action.type) {
        case TRY_AUTENTICATE:
            state = {...state, loading: true};
            break;
        case AUTENTICATE_END:
            state = {...state, message: action.message, loading: false};
            break;
    }
    return state;
};
