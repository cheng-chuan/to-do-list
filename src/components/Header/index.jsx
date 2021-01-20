import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {
    handleKeyChange=(event)=>{
        const {target,keyCode} = event
        if(keyCode!==13) return 
        if(target.value.trim()==='') return

        const todoObj={}
        todoObj.id= nanoid()
        todoObj.todo=target.value.trim()
        todoObj.done = false
        this.props.addTodos(todoObj)
        
        target.value = ''
    }
    render() {
        return (
            <div className="header">
                <input type="text" onKeyUp={this.handleKeyChange}/>
            </div>
        )
    }
}
