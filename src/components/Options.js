import React from 'react'
import Option from './Option';

const Options = (props) =>(
    <div>
    <button onClick={props.HandleDeleteOptions}>RemovAll</button>
    {props.options.length === 0 && <p>please add an option to get started</p>}
    {props.options.map((option) => <Option
     key={option} 
     optionText={option} 
     HandleDeleteOption={props.HandleDeleteOption}
     
     /> )}
    </div>
)
export default Options;
