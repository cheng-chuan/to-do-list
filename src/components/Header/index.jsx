import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import {nanoid} from 'nanoid'

export default class Header extends Component {

    // 对接收的props进行类型和必要性的限制
    static propTypes={
        addTodos:PropTypes.func.isRequired
    }

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
                <input type="text" onKeyUp={this.handleKeyChange} placeholder='请输入需要完成的任务'/>
            </div>
        )
    }
}
