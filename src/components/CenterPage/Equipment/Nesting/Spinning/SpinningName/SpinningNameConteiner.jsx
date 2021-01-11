import React from 'react';
import {addSpinActionCreator, updateNewSpinItemActionCreator} from "../../../../../../redax/spinning-reducer";
import SpinningName from "./SpinningName";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        spinningItems: state.spinElements.spinningItems,
        newSpinItem: state.spinElements.newSpinItem
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewSpinItem: (text) => {

            dispatch(updateNewSpinItemActionCreator(text));
        },
        addSpin: () => {
            dispatch(addSpinActionCreator());
        }
    }
}

const SpinningNameContainer = connect(mapStateToProps, mapDispatchToProps)(SpinningName);


export default SpinningNameContainer;