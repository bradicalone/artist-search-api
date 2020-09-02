import React from 'react';
import { connect } from 'react-redux';
import './details.css'

const Biography = props => {
    const biography = props.artistData.biography
        return (
            <div className="panel biography-panel">
                <div className="panel-title">
                    <h1>Biography</h1>
                </div>
                <div className="artist-biography">
                    <p>{biography}</p>
                </div>
            </div>
        )
    }
    
    const mapStateToProps = state => {
        return {
            artistData: state.data
        }
    }
    export default connect(mapStateToProps)(Biography);