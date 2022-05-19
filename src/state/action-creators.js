import axios from 'axios'
import * as types from './action-types';

const url = 'https://www.boredapi.com/api/activity/';

export function fetchActivity() {
    return function(dispatch) {
        axios.get(url)
        .then(res => {
            const activity = res.data
            dispatch({
                type: types.ADD_ACTIVITY,
                payload: activity
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}