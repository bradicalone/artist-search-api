import React from 'react';
import { connect } from 'react-redux';
import './header.css'

const ArtistHeader = props => {
    const header = props.artistData.header

        return (
            <div className="panel header-panel">
                {(() => {
                    return (
                        Object.keys(header).map((key, i) => {
                            return (
                                <React.Fragment key={i}>
                                    {key === 'artist' && (
                                        <>
                                            {header[key]  !== null ? <Artistitle name={header[key]}/> : 
                                            <Artistitle name={'Artist title not available.'}/>}
                                        </>
                                    )}
                                    {key === 'logo' && (
                                        <div className="artist-logo">{header[key] !== null ? 
                                            <img className="logo" src={header[key]}/> : 'Artist Logo not available.'}</div>
                                    )}
                                    {key === 'thumb' && (
                                        <div className="artist-thumb">{header[key] !== null ? 
                                            <img className="thumb" src={header[key]}/> : 'Artist thumb not available.'}</div>
                                    )}
                                </React.Fragment>
                            )
                        })
                    )
                })()}
            </div>
        )
    }
    
    const Artistitle = props => (
        <div className="artist-title">
            <div className="panel-title">
                <h1>Artist Title</h1>
            </div>
            <p>{props.name}</p>
        </div>
    )
    
    const mapStateToProps = state => {
        return {
            artistData: state.data
        }
    }
    export default connect(mapStateToProps)(ArtistHeader);