import React, { Component } from 'react';
import Item from './item';
class Header extends Component {
    constructor() {
        super()
        this.state = {  }
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }
    handleOnKeyDown(e){
        if(e.keyCode === 13 && this.todoInput.value!==''){
           this.props.addTodo(this.todoInput.value);
           this.todoInput.value='';
        }

    }
    render() { 
        return ( 
        <div id="todos">
           <h1>todos</h1>
           <input type="text" placeholder="Write Something" ref={input=>this.todoInput = input} id="addItem" onKeyDown={this.handleOnKeyDown}/>
           <ul className="ul">
                        {
                            this.props.todos.map((todo,index) => <Item key = {index} content={this.props.todos[index].content} index={index} flag={this.props.todos[index].flag} todos={todo.content} changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo}/>)
                        }
                </ul>
        </div> 
        );
    }
   
}
 
export default Header;