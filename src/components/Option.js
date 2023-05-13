import React from "react"

const Option = (props) => {
    return(
        <div>
       option : {props.optionText}
       <button onClick={(e) => {
        props.HandleDeleteOption(props.optionText)
       }}
       
       >
       Remove
       </button>
        </div>
     )
    }

    export default Option;