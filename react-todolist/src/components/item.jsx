import React, { Component } from 'react';
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
        this.delete = this.delete.bind(this)
        this.change = this.change.bind(this)
    }
    change(index,flag){
        if(flag === 0){
            this.props.changeTodo(index, 1);
            this.refs.todoContent.className = 'deleteItem';
        } else{
            this.props.changeTodo(index, 0);
        this.refs.todoContent.className = 'span';
        }
    }
    delete(index){
        this.props.deleteTodo(index)
    }
 
 
    render() { 
        const {content,index,flag} = this.props;
        return ( 
       
            <li className="li">
                <input type="checkbox" ref= "checkbox" checked={flag?true:false} onClick = {() => {this.change(index,flag)}} className = "checkbox"/>
                <span ref = "todoContent" className ={flag ? "deleteItem":"span" }>{content}</span>
                <span className="del" onClick= {() => {this.delete(index)}} ></span>
            </li>
     
        );
    }
    
}
 
export default Item;