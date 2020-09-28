import React from 'react';
import './App.css';
import Header from './components/header'
import Footer from './components/footer'
export interface AppProps {
}
 
export interface AppState {
}
 
class App extends React.Component<any, any> {
  public constructor(props: any) {
    super(props);
    this.state = { 
      todos:[],
      actTodos:[],

    };
    this.changeTodo = this.changeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.clearDone = this.clearDone.bind(this);
    this.handleAll = this.handleAll.bind(this);
    this.handleActive = this.handleActive.bind(this);
    this.handleComponent = this.handleComponent.bind(this);

  
  }
   public render() { 
     const {todos,actTodos} =this.state;
    let count =0;
    for(let i =0;i<todos.length;i++){
      if(todos[i].flag === 0){
        count++;
      }
    }
    return ( 
      <div>
      <Header todos={actTodos} addTodo={this.addTodo} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
      <Footer 
       count = {count}
       handleAll ={this.handleAll}
       handleActive ={this.handleActive}
       handleComponent ={this.handleComponent}
       todos = {actTodos}
       clearDone = {this.clearDone}
       addTodo = {this.addTodo}
       changeTodo = {this.changeTodo}
       deleteTodo = {this.deleteTodo}
      />
    </div>
     );
  }
  public addTodo(content:string){
    const { todos, actTodos } = this.state;
    const todo = {
      content:content,
      flag:0
    }
    todos.push(todo);
    actTodos.push(todo)
    this.setState({todos});
    this.setState({actTodos})
  }
  public changeTodo(id:number,flag:number){
    const {todos,actTodos} = this.state;
    for(let i=0;i<todos.length;i++){
      if(id===i){
        todos[i].flag = flag;
      }
    }
    this.setState({todos})
    this.setState({actTodos})
  }
  public deleteTodo(index:number){
    const {todos,actTodos} = this.state;
    for(let i =0;i<todos.length;i++){
      if(i === index){
        todos.splice(index,1)
      }
    }
    for(let i =0;i<actTodos.length;i++){
      if(i === index){
        actTodos.splice(index,1)
      }
    }
    this.setState({todos});
    this.setState({actTodos})
    
  }
  public clearDone(){
   let  {todos,actTodos} = this.state;
    todos = todos.filter(function(todo:any){
      return todo.flag ===0
    })
    actTodos = actTodos.filter(function(todo:any){
      return todo.flag===0
    })
    this.setState({todos});
  this.setState({actTodos});
  }
  public handleAll(){
    const { todos, actTodos } = this.state;
    actTodos.length=0;
    for(let i=0;i<todos.length;i++){
      actTodos.push(todos[i]);
    }
    this.setState({actTodos});
  }
  public handleActive(){
    const { todos, actTodos } = this.state;
    actTodos.length=0;
    for(let i=0;i<todos.length;i++){
      if(todos[i].flag===0){
        actTodos.push(todos[i]);
      }
    }
    this.setState({actTodos})
  }
  public handleComponent(){
    const { todos, actTodos } = this.state;
    actTodos.length=0;
    for(let i=0;i<todos.length;i++){
      if(todos[i].flag===1){
        actTodos.push(todos[i]);
      }
    }
    this.setState({actTodos})
  }
}
 
export default App;
