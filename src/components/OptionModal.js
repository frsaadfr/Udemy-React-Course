import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.WipeSelectedOption}
    contentLabel="Selected Option"
    >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.WipeSelectedOption}>Close</button>
    </Modal>
)
export default OptionModal;

// create new even clears selected option state
//pass in current comp opt modal
//call it on the button 