import { SUBMIT_ARTIST, API_ERROR, EMPTY_STRING, REMOVE_ERROR_DIALOG} from '../actions/types'

let initState = {
    header: {
        logo: '',
        artist: '', 
        thumb: ''
    },
    details: {
        label: '',
        genre: '',
        yearFormed: '',
        yearDied: '',
        members: '',
        location: ''
    },
    social: {
        website: '',
        facebook: '',
        twitter: ''
    },
    biography: ''
}

export const artistData = (state = initState, action) => {
    switch (action.type) {
        case REMOVE_ERROR_DIALOG:
            return { valueError: false, ...initState }
        case SUBMIT_ARTIST:
            return { submit: true, ...action.payload }
        case API_ERROR:
            console.log(action.payload)
            return {valueError: true, ...action.payload}
        case EMPTY_STRING:
            return { valueError: true, ...action.payload }
        default:
            return { submit: false, ...initState };
    }
};