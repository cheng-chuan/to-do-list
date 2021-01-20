import React, { Component } from 'react'
import './index.css'
import Item from './../Item'

export default class List extends Component {
    render() {
        const {todos}=this.props
        return (
            <div className="list">
                <ul>
                    {
                        todos.map(item=>{
                            return <Item {...item} key={item.id} isSelected={this.props.isSelected}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
