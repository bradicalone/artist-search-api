import { combineReducers } from 'redux';

import { artistData } from './artistDataReducer'

export default combineReducers({
    data: artistData
})