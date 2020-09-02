import React from 'react';
import { connect } from 'react-redux';
import './details.css'

const ArtistDetails = props => {
    const details = props.artistData.details
        return (
            <div className="panel detail-panel">
                <div className="panel-title">
                    <h1>Artist Details</h1>
                </div>
                {(() => {
                    return (
                        Object.keys(details).map((key, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {key === 'label' && (
                                        <div className="artist-label">{details[key] !== null ? 
                                        <p>Label: {details[key] }</p>: <p>Label: Artist label not available.</p>}</div>
                                    )}
                                    {key === 'genre' && (
                                        <div className="artist-genre">{details[key] !== null ? 
                                            <p>Genre: {details[key]}</p> : <p>Genre: No Genre available.</p>}</div>
                                    )}
                                    {key === 'yearFormed' && (
                                        <div className="artist-year-formed">{details[key]  !== null ? 
                                            <p>Year Formed: {details[key]}</p> : <p>Year Formed: Not available.</p>}</div>
                                    )}
                                    {key === 'yearDied' && (
                                        <div className="artist-year-died">{details[key] !== null ? 
                                            <p>Year Died: {details[key]}</p>: <p>Year Died: Not available.</p>}</div>
                                    )}
                                    {key === 'location' && (
                                        <div className="artist-location">{details[key] !== null ? 
                                            <p>Artist Location: {details[key]}</p> : <p>Artist Location: Not available.</p>}</div>
                                    )}
                                    {key === 'members' && (
                                        <div className="artist-location">{details[key] !== null ? 
                                            <p>Band members: {details[key]}</p> : <p>Band members: Not available.</p>}</div>
                                    )}
                                </React.Fragment>
                            )
                        })
                    )
                })()}
            </div>
        )
    }
    
    const mapStateToProps = state => {
        return {
            artistData: state.data
        }
    }
    export default connect(mapStateToProps)(ArtistDetails);