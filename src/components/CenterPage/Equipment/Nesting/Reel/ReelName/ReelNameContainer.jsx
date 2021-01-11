import React from 'react';
import {addReelActionCreator, updateNewReelItemActionCreator} from "../../../../../../redax/reel-reducer";
import ReelName from "./ReelName";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        reelItems: state.reelElements.reelItems,
        newReelItem: state.reelElements.newReelItem
    }
}

let mapDispatchToProps = (dispatch) => {
        return {
            addReel: () => {
                dispatch(addReelActionCreator());
            },
            updateNewReelItem: (text) => {
                dispatch(updateNewReelItemActionCreator(text));
            }
        }
}

const ReelNameContainer = connect(mapStateToProps, mapDispatchToProps)(ReelName);


export default ReelNameContainer;