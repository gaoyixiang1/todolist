import * as React from 'react';
import { Component } from 'react';
import Item from './item'
export interface HeaderProps {
    addTodo:any;
    todos:any;
    changeTodo:any;
    deleteTodo:any;
}
 
export interface HeaderState {
}
 
class Header extends React.Component<HeaderProps,HeaderState> {
   public constructor(props:HeaderProps) {
        super(props);
        this.handleOnKeyDown = this.handleOnKeyDown.bind(this);
    }
    public handleOnKeyDown(e:any){
        if(e.keyCode===13&&e.target.value!=''){
            this.props.addTodo(e.target.value);
            e.target.value = '';
            
        }
    }
   public render() { 
        return ( 
        <div id="todos">
           <h1>todos</h1>
           <input type="text" placeholder="Write Something"  id="addItem" onKeyDown={this.handleOnKeyDown}/>
           <ul className="ul">
                        {
                            this.props.todos.map((todo:any,index:number) => <Item key = {index} content={this.props.todos[index].content} index={index} flag={this.props.todos[index].flag} todos={todo.content} changeTodo={this.props.changeTodo} deleteTodo={this.props.deleteTodo}/>)
                        }
                </ul>
        </div> 
        );
    }
 
}
 
export default Header;