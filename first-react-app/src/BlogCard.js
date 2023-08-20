import { Component } from "react";

class BlogCard extends Component {

  render() {
    return (
      <div className="BlogCard">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>

        <p>Like Count: {this.props.likeCount}</p>
        <button onClick={this.props.onLikeBtnClick}>Like</button>
      </div>
    );
  }

   
  
    
}

export default BlogCard;
