import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const FORM_ERROR = 'FORM_ERROR';

export const fetchSmurfs = () => {
    return (dispatch) => {
        dispatch({type:FETCH_SMURFS_START})
        axios
            .get('http://localhost:3333/smurfs').then(res => {
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({type: FETCH_SMURFS_FAILURE, payload: 'Uh oh... There was an error!'})
            })
    }
}

export const addSmurf = (newSmurf) => {
    return ({type: ADD_SMURF, payload: newSmurf})
}

export const formError = () => {
    return ({type: FORM_ERROR, payload: '"Name, position and nickname fields are required."'})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call 
    // to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.