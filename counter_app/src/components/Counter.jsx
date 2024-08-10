import {Component} from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";


export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment=()=>{
        this.setState((prevState)=>({
            count: prevState.count + 1
        }))
    }
    decrement=()=>{
        this.setState((prevState)=>({
            count: prevState.count - 1
        }))
    }

    refresh=()=>{
        this.setState({
            count: 0
        })
    }

    render(){
        const {count} = this.state
        return(
            <div className='counter'>
                <h1>Count: {count}</h1>
                <div className='btns'>
                    <button onClick={this.increment} disabled={count===5?true:false}><FaPlus /></button>
                    <button onClick={this.decrement} disabled={count===-5?true:false}><FaMinus /></button>
                    <button onClick={this.refresh}><MdRefresh /></button>
                </div>                
            </div>
        )
    }
}