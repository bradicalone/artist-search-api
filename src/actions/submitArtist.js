import { SUBMIT_ARTIST, API_ERROR, EMPTY_STRING, REMOVE_ERROR_DIALOG} from './types'

export const submitInput = (e) => async (dispatch, getState) => {
    let prevState = getState().data.header

    let artistName = document.querySelector('input[class="form-control"]').value

    // Make sure user doesn't get confused and at quotes to artist names
    if( /[""]/.test(artistName) ) artistName = artistName.replace(/[""]/g, '')


    if (artistName === '') 
        return dispatch({
            type: EMPTY_STRING,
            payload: { message: 'Empty input, please enter an artist name. ex: "The Smiths" .', ...prevState }
        })
    try {
        const response = await fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${artistName}`)
        const artistData = (await response.json()).artists[0]
        console.log('artistData:', artistData)

        let usedArtistData = {
            header: {
                artist: artistData.strArtist,
                logo: artistData.strArtistLogo,
                thumb: artistData.strArtistThumb
            },
            details: {
                label: artistData.strLabel,
                genre: artistData.strGenre,
                yearFormed: artistData.intFormedYear,
                yearDied: artistData.intDiedYear,
                members: artistData.intMembers,
                location: artistData.strCountry
            },
            social: {
                website: artistData.strWebsite,
                facebook: artistData.strFacebook,
                twitter: artistData.strTwitter
            },
            biography: artistData.strBiographyEN
        }

        return dispatch({
            type: SUBMIT_ARTIST,
            payload: {...prevState, ...usedArtistData}
        })
    } catch(e) {
        return dispatch({
            type: API_ERROR,
            payload: { message: 'Input is wrong or no artist by that name. \r' +
                        'Make sure names are spaced if two words, ex: "Washed Out" .', ...prevState }
        })
    }
}

// If error dialog exist remove it upon input focus
export const removeErrorDialog = (e) => (dispatch) =>{
    let inline_style = document.querySelector('div[class="error-dialog"]').style.transform
    
    if (inline_style === 'scale(1)') {
        return dispatch({
            type: REMOVE_ERROR_DIALOG
        })
    }
}