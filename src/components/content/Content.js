import React from 'react';
import { connect } from 'react-redux';
import ArtistHeader from '../artistHeader/ArtistHeader'
import ArtistDetails from '../details/ArtistDetails'
import Biography from '../details/Biography'
import SocialMedia from '../socialMedia/SocialMedia'
import './content.css'

const Content = props => {
    const isSubmited = props.artistData.submit
    return (
        <div className="content-container">
            {(() => {
                {
                    if(isSubmited) {
                        return (
                            <React.Fragment>
                                <ArtistHeader />
                                <ArtistDetails />
                                <Biography />
                                <SocialMedia />
                            </React.Fragment>
                        )
                    }
                }
            })()}
        </div>  
    )
}

const mapStateToProps = state => {
    return {
        artistData: state.data
    }
}
export default connect(mapStateToProps)(Content);