import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {

    static propTypes={
        todos:PropTypes.array.isRequired,
        handleAllChecked:PropTypes.func.isRequired,
        clearDone:PropTypes.func.isRequired
    }

    handleChange=(event)=>{
        const {target} = event
        console.log(target.checked)
        this.props.handleAllChecked(target.checked)
    }

    hasCheckedNum=()=>{
        const {todos} =this.props
        let count = 0
        todos.forEach(item=>{
            if(item.done){
                count++
            }
        })
        return count
    }

    render() {
        const {todos} =this.props
        return (
            <label>
                <div className='footer'>
                    <div>
                        <input type="checkbox" checked={this.hasCheckedNum()===todos.length&&todos.length>0?true:false} onChange={this.handleChange}/>
                        <span>已完成：{this.hasCheckedNum()}/{todos.length}</span>
                    </div>
                    <button onClick={this.props.clearDone}>清理已完成</button>
                </div>
            </label>
        )
    }
}
