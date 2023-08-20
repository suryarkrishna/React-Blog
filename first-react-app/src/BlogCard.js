
const BlogCard = (props) => {


  // onLikeBtnClick = () => {
  //     this.setState((prevState)=>{
  //        return  {likeCount: prevState.likeCount+1}
  //     })
  // }


    return (
      <div className="BlogCard">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <p>Like Count: {props.likeCount}</p>
        <button onClick={props.onLikeBtnClick}>Like</button>
      </div>
    );
  
    
}

export default BlogCard;
