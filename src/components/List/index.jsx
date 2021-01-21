import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from './../Item'

export default class List extends Component {

    static propTypes={
        todos:PropTypes.array.isRequired,
        isSelected:PropTypes.func.isRequired
    }

    render() {
        const {todos}=this.props
        return (
            <div className="list">
                <ul>
                    {
                        todos.map(item=>{
                            return <Item {...item} key={item.id} isSelected={this.props.isSelected} isDelete={this.props.isDelete}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}
