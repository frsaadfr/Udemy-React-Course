import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.WipeSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={1000}
    className='modal'
    >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.WipeSelectedOption}>Close</button>
    </Modal>
)
export default OptionModal;

// create new even clears selected option state
//pass in current comp opt modal
//call it on the button 