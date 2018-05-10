import React, { Component } from 'react';
import '../App.css';

class ComInput extends Component {
 
  constructor(){
    super()
    this.state={
      username : '',
      content :''
    }
  }

  componentWillMount (){
    console.info('this Will Mount')
  }

  componentDidMount(){
    console.info('this Did Mount')
    this.input.focus()
  }

  handleUsernameChange(event){
    this.setState({
      username : event.target.value
    })
  }

  handleContentChange (event) {
    this.setState({
      content: event.target.value
    })
  }

  handleSubmit (){
    if (this.props.onSubmit) {
      const { username, content } = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({ content: '' })
  }
  
  render() {
    return (
      <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>用户名：</span>
        <div className='comment-field-input'>
          <input value={this.state.username} ref={(input)=>this.input=input}  onChange={this.handleUsernameChange.bind(this)}/>
        </div>
      </div>
      <div className='comment-field'>
        <span className='comment-field-name'>评论内容：</span>
        <div className='comment-field-input'>
          <textarea   onChange={this.handleContentChange.bind(this)} value={this.state.content}/>
        </div>
      </div>
      <div className='comment-field-button'>
        <button   onClick={this.handleSubmit.bind(this)}>
          发布
        </button>
      </div>
    </div>
    )
  }
}



export default ComInput;
