import { combineReducers } from 'redux'
import * as types from './action-types'


const initialActivity = {}
function activity(activityState = initialActivity, action) {
      switch (action.type) {
          case types.ADD_ACTIVITY: {
              return activityState = action.payload
          }
          default:
            return activityState
      }
    }

export default combineReducers({
    activity,
})


