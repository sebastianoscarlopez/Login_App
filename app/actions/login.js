import { URLs } from "../config/settings";

export const TRY_AUTENTICATE = 'TRY_AUTENTICATE'
export const AUTENTICATE_END = 'AUTENTICATE_END'

export function tryAutenticate(user, password)
{
    return (dispatch) => {
        dispatch({type:TRY_AUTENTICATE});
        const url = URLs.LOGIN`${user}${password}`;
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            dispatch({type:AUTENTICATE_END
                , message: responseJson.Status.Codigo===1
                    ? 'OK'
                    : responseJson.Status.Texto});
        })
        .catch(error => {
            dispatch({type:AUTENTICATE_END, message: `Error inesperado ${error}`});
        })
    };
}