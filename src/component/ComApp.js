import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import ComInput from './ComInput'
import ComList from './ComList'
class ComApp extends Component {
 
  constructor (){
    super()
    this.state = {
      comments:[] 
    }
  }

  handleSubmitComment(comment){
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments:this.state.comments
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="wrapper">
            <ComInput onSubmit={this.handleSubmitComment.bind(this)} />
            <ComList comments={this.state.comments}/>
        </div>
       
      </div>
    );
  }
}



export default ComApp;
