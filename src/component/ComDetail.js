import React, { Component } from 'react';
import '../App.css';

class ComDetail extends Component {
 
  static defaultProps={
    comment : {
      username:'',
      content :''
    }
  }

  render() {
    return (
      <div className='comment'>
      <div className='comment-user'>
        <span>{this.props.comment.username} </span>：
      </div>
      <p>{this.props.comment.content}</p>
    </div>
    )
  }
}



export default ComDetail;
