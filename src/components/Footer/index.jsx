import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleChange=(event)=>{
        const {target} = event
        console.log(target.checked)
        this.props.handleAllChecked(target.checked)
    }

    hasCheckedNum=()=>{
        const {todos} =this.props
        let count = 0
        todos.map(item=>{
            if(item.done){
                count++
            }
        })
        console.log(count)
        return count
    }

    render() {
        const {todos} =this.props
        return (
            <label>
                <div className='footer'>
                    <div>
                        <input type="checkbox" onChange={this.handleChange}/>
                        <span>已完成：{this.hasCheckedNum()}/{todos.length}</span>
                    </div>
                    <button>清理已完成</button>
                </div>
            </label>
        )
    }
}
