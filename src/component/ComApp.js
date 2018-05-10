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

  componentWillMount (){//加载数据
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  //评论内容持久化
  _saveComments (comments){
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmitComment(comment){
    if (!comment) return
    if (!comment.username) return alert('请输入用户名')
    if (!comment.content) return alert('请输入评论内容')
    console.info(comment)
    const comments = this.state.comments
    comments.push(comment)
    this.setState(
      {comments}
    )
    this._saveComments(comments)
  }
  handleDeleteComment(index){
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="wrapper">
            <ComInput onSubmit={this.handleSubmitComment.bind(this)} />
            <ComList  onDeleteComment={this.handleDeleteComment.bind(this)} comments={this.state.comments}/>
        </div>
       
      </div>
    );
  }
}



export default ComApp;
