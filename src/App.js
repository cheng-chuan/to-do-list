import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import React, { Component } from 'react'

export default class App extends Component {
  state={
    todos:[
      {id:'001',todo:'吃饭',done:true},
      {id:'002',todo:'睡觉',done:false},
      {id:'003',todo:'敲代码',done:false}
    ]
  }
  // 接收子组件的数据
  addTodos=(todoObj)=>{
    const {todos} = this.state
    this.setState({
      todos:[todoObj,...todos]
    })
  }
  // 处理是否选中
  isSelected=(id,done)=>{
    const {todos} = this.state
    const newToDos = todos.map(item=>{
      if(item.id===id){
        item.done = done
      }
      return item
    })
    this.setState({
      todos:newToDos
    })
  }
  // 处理全选或全不选
  handleAllChecked=(done)=>{
    const {todos} = this.state
    const newToDos = todos.map(item=>{
      item.done = done
      return item
    })
    this.setState({
      todos:newToDos
    })
  }
  render() {
    console.log('11111')
    const {todos} = this.state
    return (
      <div className="app">
        <div className='toDoListBox'>
          <Header addTodos={this.addTodos}/>
          <List todos={todos} isSelected={this.isSelected}/>
          <Footer todos={todos} handleAllChecked={this.handleAllChecked}/>
        </div>
      </div>
    );
  }
}

