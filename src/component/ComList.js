import React, { Component } from 'react';
import '../App.css';
import ComDetail from './ComDetail';
class ComList extends Component {
 
  static defaultProps={
    comments:[]
  }

  handleDeleteComment(index){
    if(this.props.onDeleteComment){
      this.props.onDeleteComment(index)
    }
  }
  render() {
    return (
      <div>
          {this.props.comments.map((comment , index)=><ComDetail
             comment={comment}
             key={index}
             index={index}
             onDeleteComment={this.handleDeleteComment.bind(this)}
          />) }
      </div>
    )
  }
}



export default ComList;
