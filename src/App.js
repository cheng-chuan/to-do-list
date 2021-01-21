import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import React, { Component } from 'react'

export default class App extends Component {
  // 状态在哪里，操作状态的方法就在哪里


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
  // 处理单条删除
  isDelete=(id)=>{
    const {todos} = this.state
    let newTodos=[]
    todos.forEach((item)=>{
      if(item.id!==id){
        newTodos.push(item)
      }
    })
    this.setState({
      todos:newTodos
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

  // 清理已完成
  clearDone=()=>{
    const {todos} = this.state
    let newTodos=[]
    todos.forEach((item)=>{
      if(!item.done){
        newTodos.push(item)
      }
    })
    if(window.confirm('确定清除已完成的任务？')){
      this.setState({
        todos:newTodos
      })
    }
  }

  render() {
    const {todos} = this.state
    return (
      <div className="app">
        <div className='toDoListBox'>
          <Header addTodos={this.addTodos}/>
          <List todos={todos} isSelected={this.isSelected} isDelete={this.isDelete}/>
          <Footer todos={todos} handleAllChecked={this.handleAllChecked} clearDone={this.clearDone}/>
        </div>
      </div>
    );
  }
}

