import React from 'react';
import { connect } from 'react-redux';
import { submitInput, removeErrorDialog } from '../../actions/submitArtist'
import Logo from '../Logo'
import './nav.css'


const Nav = props => {
    const isValueError = props.artistData.valueError
    const message = props.artistData.message

    const showDialog = {
        transform: 'scale(1)'
    }
    const removeDialog = {
        transform: 'scale(0)'
    }
    return (
        <div className="nav-container">
            <nav>
                <div className="input-container">
                    <div className="nav-logo">
                        <Logo />
                    </div>
                    <div className="wrapper">
                        <div className="svg-wrapper">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-search" fill="#09008e" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search any artist ex: Wild Nothing" aria-label="Search any artist"
                                onFocus={(e) => {props.dispatch(removeErrorDialog(e))}}
                            />
                            <span className="show-boarder"></span>
                            
                            <div className="input-group-append">
                                <button className="btn btn-submit" type="submit" id="button-addon2" 
                                onClick={(e) => {props.dispatch(submitInput(e))}}>Search</button>
                            </div>
                        </div>
                        <div style={isValueError ? showDialog : removeDialog} className="error-dialog">
                            <p>{message}</p>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        artistData: state.data
    }
}
export default connect(mapStateToProps)(Nav);
