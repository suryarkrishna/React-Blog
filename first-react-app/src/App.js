import './App.css';
import BlogCard from './BlogCard';
import {Component} from 'react';

class App extends Component {

  state = {
    showBlogs: true,
    blogArr: [
      {
        id: 1,
        title: "Blog Title 1",
        description:
          "This is the blog description. A few lines regarding the blog.",
        likeCount: 0
      },
      {
        id: 2,
        title: "Blog Title 2",
        description:
          "This is the blog description. A few lines regarding the blog.",
        likeCount: 0
      },
      {
        id: 3,
        title: "Blog Title 3",
        description:
          "This is the blog description. A few lines regarding the blog.",
        likeCount: 0
      }
    ]
  }

  onLikeBtnClick = (pos) => {
      const updatedBlogList = this.state.blogArr;
      const updatedBlogObj = updatedBlogList[pos];
      updatedBlogObj.likeCount += 1;
      updatedBlogList[pos] = updatedBlogObj;

      this.setState({blogArr: updatedBlogList})
  }

  onHideBtnClick = () => {
      this.setState((prevState) => ({
        showBlogs: !prevState.showBlogs
      }));
  }

  render(){
    const buttonText = this.state.showBlogs ? "Hide list" : "Show list";
    const blogCards = this.state.blogArr.map((item,pos)=>{
      return (
        <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} onLikeBtnClick={()=>this.onLikeBtnClick(pos)}/>
      )
    })

    return (
      <div className="App" >
        <div className='heading'>Blog Application using React</div>
        <button className='btn' onClick={this.onHideBtnClick} >{buttonText}</button>
        <br></br>
        <div className='BlogContainer'>
        {
          this.state.showBlogs ? blogCards : null
        }
        </div>
        
      </div>
    );
  }
}

export default App;
