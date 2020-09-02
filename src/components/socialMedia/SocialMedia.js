import React from 'react';
import { connect } from 'react-redux';
import './social.css'

const SocialMedia= (props) => {
    const socialMedia = props.artistData.social
    
        return (
            <div className="panel social-panel">
                <p>© brad-joshua.com, Inc. All rights reserved. Just kidding. </p>
                <div className="social-container">
                    
                    {(() => { 
                        return (
                            Object.keys(socialMedia).map((key, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        {key === 'website' && (
                                            <div className="artist-label">{socialMedia[key] ? 
                                                <a href={socialMedia[key]}><i className="fas fa-pager"></i></a> : <i className="fas fa-pager"><p> Account not available.</p></i>}</div>
                                        )}
                                        {key === 'facebook' && (
                                            <div className="artist-title">{socialMedia[key] ? 
                                                <a href={socialMedia[key]}><i className="fab fa-facebook-square"></i></a> : <i className="fab fa-facebook-square"><p> Account not available.</p></i>}</div>
                                        )}
                                        {key === 'twitter' && (
                                            <div className="artist-logo">{socialMedia[key]  ? 
                                                <a href={socialMedia[key]}><i className="fab fa-twitter-square"></i></a> : <i className="fab fa-twitter-square"><p> Account not available.</p></i>}</div>
                                        )}
                                    </React.Fragment>
                                )
                            })
                        )
                    })()}
                </div>
                <p>Super duper cool artist search app</p>
            </div>
        )
    }
    
    const mapStateToProps = state => {
        return {
            artistData: state.data
        }
    }
    export default connect(mapStateToProps)(SocialMedia);