export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../resources/json/instructions.json';
 
export function getData(){
    return (dispatch) => {
        const data  = Data.instructions;
        dispatch({type: DATA_AVAILABLE, data:data});
    };
}
