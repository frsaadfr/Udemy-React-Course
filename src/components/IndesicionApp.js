import React from "react";
import AddOption from './AddOption';
import Options from './Options'
import Header from './Header';
import Action from './Action';
import OptionModal from "./OptionModal";

export default class IndesicionApp extends React.Component {
    
    state = {
        options: [],
        selectedOption: undefined
    }
    WipeSelectedOption = () => {
        this.setState(() => ({selectedOption:undefined}))
    }
    HandleDeleteOptions = () => {

        this.setState(() => ({options:[]}))
    }
    HandleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    HandlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
          }
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    componentDidMount = () => {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if(options){
            this.setState(() => ({ options }))

            }
        }
        catch (e){
        
        }
    }
    componentDidUpdate =(prevProps, prevState) => {
        if(prevState.options.length !== this.state.options.length){
           const json = JSON.stringify(this.state.options)
           localStorage.setItem('options',json);
            console.log('saving data');
        }
    }
    componentWillUnmount = () => {
        console.log('componentWillUnmount')
    }
    
    render(){

       
        const subtitle = 'put your life in hands of computer';

        return(
            <div>
          <Header  subtitle={subtitle}/>
          <Action hasOptions={this.state.options.length > 0}
          HandlePick = {this.HandlePick}
          />
          <Options options={this.state.options}
          HandleDeleteOptions={this.HandleDeleteOptions}
          HandleDeleteOption={this.HandleDeleteOption}
          />
          <AddOption 
          handleAddOption = {this.handleAddOption}
          />
          <OptionModal 
          selectedOption={this.state.selectedOption}
          WipeSelectedOption={this.WipeSelectedOption}
          />
            </div>
        );
    }
    
}   