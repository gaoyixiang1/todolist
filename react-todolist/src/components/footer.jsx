import React, { Component } from 'react';
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleActiveClick = this.handleActiveClick.bind(this);
        this.handleCompletedClick = this.handleCompletedClick.bind(this);
        this.handleClearClick = this.handleClearClick.bind(this);
    }
    handleAllClick(){
        this.props.handleAll();
        // console.log(this.props.todos);
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
}
 
export default Footer;