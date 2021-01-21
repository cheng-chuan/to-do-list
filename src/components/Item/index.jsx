import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
    state={
        isActive:false
    }

    static propTypes={
        isDelete:PropTypes.func.isRequired,
        isSelected:PropTypes.func.isRequired,
        id:PropTypes.string.isRequired,
        todo:PropTypes.string.isRequired,
        done:PropTypes.bool.isRequired
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
    // 删除的回调
    handleDelete=(id)=>{
        if(window.confirm('确定删除吗')){
            this.props.isDelete(id)
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
                    <button onClick={()=>this.handleDelete(id)} style={{display:isActive? 'block':'none'}}>删除</button>
                </li>
            </label>
        )
    }
}
