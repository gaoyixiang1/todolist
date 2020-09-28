import * as React from 'react';
import { Component } from 'react';
export interface FooterProps {
    count:number;
    handleAll:any;
    handleActive:any;
    handleComponent:any;
    todos:any[];
    clearDone:any;
    addTodo:any;
    changeTodo:any;
    deleteTodo:any;
    

}
 
export interface FooterState {
    
}
 
class Footer extends React.Component<FooterProps, FooterState> {
    constructor(props: FooterProps) {
        super(props);
        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.handleCompletedClick = this.handleCompletedClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }
    render() { 
        return(
            <div id="button">
                 <span>
                     <i id = "count">{this.props.count}</i>
                     <label>items left</label>
                 </span>
                <button id = "all" onClick={this.handleAllClick}>All</button>
                <button id = "active" onClick={this.handleActiveClick}>Active</button>
                <button id = "completed" onClick={this.handleCompletedClick}>Completed</button>
                <button id = "clear" onClick={this.handleClearClick}>Clear Completed</button>
            </div>
        )
    }
    handleAllClick(){
        this.props.handleAll()
    }
    handleActiveClick(){
        this.props.handleActive();
    }
    handleCompletedClick(){
        this.props.handleComponent();
    }
    handleClearClick(){
        this.props.clearDone();
    }
}
 
export default Footer;