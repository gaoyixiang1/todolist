import * as React from 'react';
export interface ItemProps {
    content:string;
    index:number;
    flag:number;
    todos:string;
    changeTodo:any;
    deleteTodo:any;

}
 
export interface ItemState {
    
}
 
class Item extends React.Component<ItemProps, any> {
    constructor(props: ItemProps) {
        super(props);
        this.delete = this.delete.bind(this)
        this.change = this.change.bind(this);
       
    }
    render() { 
        const {content,index,flag} = this.props;
         return ( 
       
            <li className="li">
                <input type="checkbox" ref= "checkbox" checked={flag?true:false} onClick = {() => {this.change(index,flag)}} className = "checkbox"/>
                <span  className ={flag ? "deleteItem":"span" }>{content}</span>
                <span className="del" onClick= {() => {this.delete(index)}} ></span>
            </li>
     
        );
    }
    change(index:number,flag:number){
        let todoContent =document.querySelector("span:nth-child(1)");                 
          if(todoContent!=null){
            if(flag ===0){
                this.props.changeTodo(index,1);
               todoContent.className='deleteItem'
               
            }else{
                this.props.changeTodo(index,0);
               todoContent.className='span';
            }
          }
    }
    delete(index:number){
        this.props.deleteTodo(index);
    }
}
 
export default Item;