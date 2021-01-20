import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state={
        isActive:false
    }
    // 处理鼠标移入或移出
    handleMouseChange=(flag)=>{
        return ()=>{
            this.setState({
                isActive:flag
            })
        }
    }
    // 处理复选框选中或未选中
    handleChange=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked)
            this.props.isSelected(id,event.target.checked)
        }
    }
    render() {
        const {id,todo,done}=this.props
        const {isActive} = this.state
        return (
            <label>
                <li style={{background:isActive? '#F3F3F3':'white'}} onMouseEnter={this.handleMouseChange(true)} onMouseLeave={this.handleMouseChange(false)}>
                    <div>
                        <input type="checkbox" checked={done} onChange={this.handleChange(id)}/>
                        <span>{todo}</span>
                    </div>
                    <button style={{display:isActive? 'block':'none'}}>删除</button>
                </li>
            </label>
        )
    }
}
