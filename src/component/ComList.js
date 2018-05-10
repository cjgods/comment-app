import React, { Component } from 'react';
import '../App.css';
import ComDetail from './ComDetail';
class ComList extends Component {
 
  static defaultProps={
    comments:[]
  }

  render() {
    return (
      <div>
          {this.props.comments.map((comment , index)=><ComDetail comment={comment} key={index}/>) }
      </div>
    )
  }
}



export default ComList;
